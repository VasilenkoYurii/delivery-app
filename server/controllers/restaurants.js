const Restaurant = require('../models/restaurant');

const listResturants = async () => {
  const data = await Restaurant.find();
  return data;
};

module.exports = {
  listResturants,
};
