const express = require('express');
const router = express.Router();
const { getWeatherDetails } = require('../controllers/weatherController');

const api_point = process.env.API_POINT;

router.get(`${api_point}`+'/', getWeatherDetails);

module.exports = router;