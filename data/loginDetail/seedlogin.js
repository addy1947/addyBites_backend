const mongoose = require('mongoose');
const Login = require('./schema');
const dataPromise = require('./loginData');

async function seed() {
    await mongoose.connect('mongodb://127.0.0.1:27017/products');
    console.log('✅ Connected to MongoDB');
    const data = await dataPromise; // Wait for the hashed data
    const inserted = await Login.insertMany(data);
    console.log(`✅ Seeded ${inserted.length} login users!`);
    await mongoose.connection.close();
}

seed().catch(err => {
    console.error('❌ Error during seeding:', err);
    mongoose.connection.close();
}); 