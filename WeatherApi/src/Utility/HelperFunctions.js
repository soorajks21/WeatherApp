const axios = require('axios');
const fetchWeatherApi = async () => {
    
    const api_url = process.env.API_URL;
   
   const response = await axios.get(api_url).catch((error) => (new BadRequestError(error)));

    return response.data;
}



module.exports = {fetchWeatherApi}