const { getWeatherData, fetchWeatherApi } = require('../Utility/HelperFunctions');


const getWeatherDetails = async (req, res) => {
    try {
        const weatherDetails = await fetchWeatherApi();

        const data = getWeatherData(weatherDetails);
        return res.status(200).send({weather: data});
    }
    catch (ex) {
        return res.status(400).send({ error:'Internal Server Error'});
    }
 
    };


module.exports = { getWeatherDetails };