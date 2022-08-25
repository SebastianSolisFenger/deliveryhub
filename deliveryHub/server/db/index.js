const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Seba:Jesusismyhome77@cluster0.ql4fy.mongodb.net/food-ordering?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
