const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
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

const Contact = model('kfc', contactSchema);

module.exports = Contact;
