
const mongoose = require('mongoose');
const Product = require('./product');
const productData = require('./productData');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/products')
  .then(() => {
    console.log("✅ Connected to MongoDB");
    return Product.insertMany(productData);
  })
  .then((inserted) => {
    console.log(`✅ Seeded ${inserted.length} products!`);
  })
  .catch((err) => {
    console.error("❌ Error during seeding:", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

