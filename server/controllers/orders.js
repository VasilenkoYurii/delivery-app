const Order = require('../models/order');

const listContacts = async () => {
  const data = await Order.find();
  return data;
};

const addContact = async body => {
  const result = await Order.create(body);
  return result;
};

module.exports = {
  listContacts,
  addContact,
};
