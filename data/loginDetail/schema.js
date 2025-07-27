const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: { type: String, required: true },
    buildingNumber: { type: String, required: true },
    landmark: { type: String, required: false },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
}, { _id: true });

const detailsSchema = new mongoose.Schema({
    qty: {
        type: Number,
        required: true,
        min: 1
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
}, { _id: false })

const orderSchema = new mongoose.Schema({
    
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: Date.now
    },
    
    orderedproduct:[detailsSchema],    
}, { _id: true })


// Define a schema for items within the cart
const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId to reference a Product model
        ref: 'Product' ,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: 1 // Quantity should be at least 1
    }
}, { _id: false }); // Set _id: false if you don't need an _id for each cart item

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        required: false
    },
    signupDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    addresses: {
        type: [addressSchema],
        required: false
    },
    order: {
        type: [orderSchema], // You might want to define a specific schema for orders too
        required: false
    },
    cart: {
        type: [cartItemSchema], // Now cart uses the defined cartItemSchema
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);