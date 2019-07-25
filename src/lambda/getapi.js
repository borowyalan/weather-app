
require('dotenv').config();
const axios = require("axios");

exports.handler = function(event, context, callback) {

  const API_TOKEN = process.env.API_TOKEN
  const latitude = event.queryStringParameters.latitude;
  const longitude = event.queryStringParameters.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_TOKEN}`

  // Let's log some stuff we already have.
  console.log("Injecting token to", URL);
  console.log("logging event.....", event);
  console.log("Constructed URL is ...", URL);

  // Here's a function we'll use to define how our response will look like when we call callback
  const pass = (body, body2) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({current: body, forecast: body2})
    });
  };

const get = () => {
axios.all([
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=9bd94d4345bd3e88206217430456a10b&units=metric`),
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=9bd94d4345bd3e88206217430456a10b&units=metric`)
])
  .then(axios.spread((currentWeatherResponse, forecastResponse) => {
    console.log(currentWeatherResponse, forecastResponse);
    weather = { current: currentWeatherResponse.data, forecast: forecastResponse.data}
    pass(currentWeatherResponse.data, forecastResponse.data)
  }))
  .catch(err => pass(err));
};

  if (event.httpMethod == "GET") {
    get()

  }
}