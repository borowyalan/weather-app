
require('dotenv').config();
const axios = require("axios");

exports.handler = function(event, context, callback) {

  const{ API_TOKEN, API_URL } = process.env
  const latitude = event.queryStringParameters.latitude;
  const longitude = event.queryStringParameters.longitude;
  const URL = `?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_TOKEN}`

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
  axios.get(`${API_URL}/weather?lat=${latitude}&lon=${longitude}&APPID=${API_TOKEN}&units=metric`),
  axios.get(`${API_URL}/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_TOKEN}&units=metric`)
])
  .then(axios.spread((currentWeatherResponse, forecastResponse) => {
    weather = { current: currentWeatherResponse.data, forecast: forecastResponse.data}
    pass(currentWeatherResponse.data, forecastResponse.data)
  }))
  .catch(err => pass(err));
};

  if (event.httpMethod == "GET") {
    get()

  }
}