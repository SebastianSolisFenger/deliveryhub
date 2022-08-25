const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// product schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adjective: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    // type: Schema.Types.ObjectId,
    // ref: 'Category',
    // required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
