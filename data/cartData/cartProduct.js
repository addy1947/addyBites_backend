const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    // Optionally, you can add quantity or user fields here
});

module.exports = mongoose.model('CartProduct', cartProductSchema); 