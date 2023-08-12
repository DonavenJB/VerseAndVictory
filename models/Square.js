const mongoose = require('mongoose');

const SquareSchema = new mongoose.Schema({
  position: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  conquered: {
    type: Boolean,
    default: false
  }, 
  conquerer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
});

const Square = mongoose.model('Square', SquareSchema );
module.exports = Square;