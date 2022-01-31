const express = require('express');
const router = express.Router();
const { getWeatherDetails } = require('../controllers/weatherController');


const api = process.env.API_URL;

console.log(api);


router.get('/', getWeatherDetails);

module.exports = router;