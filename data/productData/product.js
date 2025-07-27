const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: [String], // changed from String to array of strings
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: true
  },
  cuisine: {
    type: String, // added
    required: true
  },
  spiceLevel: {
    type: String, // added
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
