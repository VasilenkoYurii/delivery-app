const express = require('express');
const Joi = require('joi');

const contacts = require('../../controllers/orders');

const { HttpError } = require('../../helpers');

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  comment: Joi.any(),
  price: Joi.number().required(),
  orders: Joi.array().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const contactsList = await contacts.listContacts();

    res.json(contactsList);
  } catch (error) {
    next(error);
  }
});

router.get('/byEmail/:email', async (req, res, next) => {
  try {
    const { email } = req.params;
    const contactsList = await contacts.findContactsByEmail(email);

    res.json(contactsList);
  } catch (error) {
    next(error);
  }
});

router.get('/byPhone/:phone', async (req, res, next) => {
  try {
    const { phone } = req.params;

    console.log(phone);

    const contactsList = await contacts.findContactsByPhone(phone);

    res.json(contactsList);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
