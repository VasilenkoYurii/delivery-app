const express = require('express');
const Joi = require('joi');

const restaurants = require('../../controllers/restaurants');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const restaurantsList = await restaurants.listResturants();

    res.json(restaurantsList);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
