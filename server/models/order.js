const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name'],
  },
  email: {
    type: String,
    required: [true, 'Set email'],
  },
  phone: {
    type: String,
    required: [true, 'Set phone'],
  },
  address: {
    type: String,
    required: [true, 'Set address'],
  },
  comment: {
    type: String,
  },
  price: {
    type: Number,
    required: [true],
  },
  orders: {
    type: Array,
    required: [true],
  },
});

const Order = model('order', orderSchema);

module.exports = Order;
