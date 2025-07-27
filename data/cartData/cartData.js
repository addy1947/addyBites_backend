const mongoose = require('mongoose');

// Cart data with actual product IDs from the database
const cartProducts = [
    { product: new mongoose.Types.ObjectId('687c821d776b0e59c85c3291') },
    { product: new mongoose.Types.ObjectId('687c821d776b0e59c85c3292') },
    { product: new mongoose.Types.ObjectId('687c821d776b0e59c85c3293') },
    { product: new mongoose.Types.ObjectId('687c821d776b0e59c85c3295') },
    // Add more cart product objects as needed
];

module.exports = cartProducts; 