
export const GetWeatherData = async () => {

 
    let response: any = await fetch(`http://localhost:3001/api/v1/weather/`).then((data) => data);
    return response;  
    
 
}
