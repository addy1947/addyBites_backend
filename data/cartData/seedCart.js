const mongoose = require('mongoose');
const CartProduct = require('./cartProduct');
const cartData = require('./cartData');

// Connect to MongoDB (adjust the DB name as needed)
mongoose.connect('mongodb://127.0.0.1:27017/products')
    .then(() => {
        console.log('✅ Connected to MongoDB');
        return CartProduct.insertMany(cartData);
    })
    .then((inserted) => {
        console.log(`✅ Seeded ${inserted.length} cart products!`);
    })
    .catch((err) => {
        console.error('❌ Error during seeding:', err);
    })
    .finally(() => {
        mongoose.connection.close();
    }); 