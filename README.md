# Delivery App Backend

A Node.js/Express backend for the delivery application with authentication, product management, and cart functionality.

## Features

- User authentication with JWT
- Product search and management
- Shopping cart functionality
- User profile management
- MongoDB integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `env.example` to `secret.env`
   - Update the values in `secret.env` with your actual configuration

3. Start MongoDB:
   - Make sure MongoDB is running on `mongodb://127.0.0.1:27017/products`

4. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /products/all` - Get all products
- `GET /products/search?q=<query>` - Search products
- `GET /products/details/:_id` - Get product details

### Cart
- `GET /products/:_id/cart` - Get user's cart
- `POST /products/:_id/cart` - Add item to cart
- `DELETE /products/:_id/cart` - Remove item from cart

### User
- `GET /user/:_id` - Get user profile with cart and orders

## Environment Variables

- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRES_IN` - JWT token expiration time
- `MONGODB_URI` - MongoDB connection string (optional)

## Dependencies

- Express.js - Web framework
- Mongoose - MongoDB ODM
- bcrypt - Password hashing
- jsonwebtoken - JWT authentication
- cors - Cross-origin resource sharing
- cookie-parser - Cookie parsing
- dotenv - Environment variable management 