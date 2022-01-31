const { getWeatherData, fetchWeatherApi } = require('../Utility/HelperFunctions');

const getWeatherDetails = async (req, res) => {
    
    const weatherDetails = await fetchWeatherApi();

    const data = getWeatherData(weatherDetails);
    return res.status(200).send({weather: data});
    };


module.exports = { getWeatherDetails };