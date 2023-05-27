const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
  shop: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  logo: {
    type: String,
  },
  kcal: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Restaurant = model('restaurant', restaurantSchema);

module.exports = Restaurant;
