const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// JWT Auth Middleware
function authenticateJWT(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or tampered token' });
  }
}

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'https://addy-bites.vercel.app', // Removed trailing slash
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Set-Cookie']
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Health check endpoint - should be first
app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Test endpoint for debugging
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test endpoint working' });
});

// MongoDB connection with better error handling
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    console.log(`📊 Database: ${MONGODB_URI.split('/').pop()}`);
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Import models
const Product = require('./data/productData/product');
const Cartproducts = require('./data/cartData/cartProduct');
const User = require('./data/loginDetail/schema');

// Use auth routes
app.use('/api/auth', authRoutes);


app.get('/products/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }
    const results = await Product.find({
      name: { $regex: query, $options: "i" }
    });
    res.status(200).json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Error searching products', error: error.message });
  }
});

app.get('/products/:_id/cart', authenticateJWT, async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id).populate('cart.productId');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cart = user.cart;
    return res.status(200).json(cart);
  } catch (error) {
    console.error('Cart fetch error:', error);
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
});

app.get('/products/all', async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts || allProducts.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.status(200).json(
      allProducts.map(product => ({
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        _id: product._id,
        mealType: product.mealType
      }))
    );
  } catch (error) {
    console.error('Products fetch error:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

app.get('/products/details/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Product details error:', error);
    res.status(500).json({ message: 'Error fetching product details', error: error.message });
  }
});

app.get('/user/:_id', authenticateJWT, async (req, res) => {
  const { _id } = req.params;
  const user = await User.findById(_id)
    .populate('cart.productId') // cart product reference
    .populate({
      path: 'order.orderedproduct.productId', // nested product ref in order
      model: 'Product'
    })
    .populate({
      path: 'order.address', // nested product ref in order
      model: 'Product'
    });
  ;

  res.status(200).json(user);
});

app.post('/user/:_id/address/save', authenticateJWT, async (req, res) => {
  const { _id } = req.params;
  const addressData = req.body;

  if (!addressData.name || !addressData.buildingNumber || !addressData.city || !addressData.district || !addressData.state || !addressData.pincode) {
    console.error('Validation Error: Missing required address fields.');
    return res.status(400).json({ message: 'Missing required address fields.' });
  }
  try {
    const user = await User.findById(_id);
    if (!user) {
      console.error(`User with ID ${_id} not found.`);
      return res.status(404).json({ message: 'User not found.' });
    }
    user.addresses.push(addressData);
    await user.save();
    res.status(200).json({
      message: 'Address saved successfully!',
    });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({
      message: 'Server error while saving address.',
      error: error.message
    });
  }
});

app.post('/products/cart/:_id/add', authenticateJWT, async (req, res) => {
  try {
    const { _id } = req.params;
    let { qty, pro } = req.query;
    qty = parseInt(qty, 10);

    if (!qty || qty <= 0) {
      return res.status(400).json({ message: 'Quantity must be greater than 0' });
    }

    const product = await Product.findById(pro);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find existing product in cart
    const existingProduct = user.cart.find(item => item.productId == pro);
    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      user.cart.push({ productId: pro, qty: qty });
    }

    await user.save();
    res.status(200).json({ message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Server error while adding to cart', error: error.message });
  }
});

app.post("/user/:_id/cart/order", authenticateJWT, async (req, res) => {
  const { _id } = req.params;
  const { addressId } = req.body;
  const { paidAmount } = req.body

  const user = await User.findById(_id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const address = user.addresses.find(address => address._id.toString() === addressId);
  if (!address) {
    return res.status(404).json({ message: "Address not found" });
  }

  const cart = user.cart;
  if (cart.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const orderedProduct = user.cart.map(item => ({
    productId: item.productId,
    qty: item.qty,


  }));

  user.order.push({
    paidAmount: paidAmount,
    address: address,
    orderedproduct: orderedProduct
  });

  user.cart = [];
  await user.save();

  res.status(200).json({ message: "Order placed successfully" });
});


// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 CORS enabled for: https://addy-bites.vercel.app`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Test endpoint: http://localhost:${PORT}/test`);
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
  } else {
    console.error('❌ Server error:', error);
  }
  process.exit(1);
});
