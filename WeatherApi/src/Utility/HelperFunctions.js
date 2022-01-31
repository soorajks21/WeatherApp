const axios = require('axios');
const { BadRequestError } = require('../Utility/errors');
const fetchWeatherApi = async () => {
    
    const api_url = process.env.API_URL;
   
   const response = await axios.get(api_url).catch((error) => (new BadRequestError(error)));

    return response.data;
}


const getWeatherData = (data) => {
   

  const weather =  data.map(item => {
      const container = {
          temp: item.the_temp,
          min: item.min_temp,
          max: item.max_temp,
          state: item.weather_state_name,
          abbr:item.weather_state_abbr,
          time: new Date(item.created).toLocaleTimeString('en-Us')
          
      };
      return container
    });

    return weather;
}


module.exports = {getWeatherData, fetchWeatherApi}