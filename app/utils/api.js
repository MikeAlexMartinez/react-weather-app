'use strict';

var axios = require('axios');
const { OPEN_WEATHER_API_KEY } = require('../config.js');
var openWeatherCodes = require('./openWeatherCodes');

// hits api end point
function getForecastData(city, country) {
  var target = 'http://api.openweathermap.org/data/2.5/forecast?q=' +
    city + ',' + country + '&APPID=' + OPEN_WEATHER_API_KEY;

  return axios.get(target);
}

function kelvinToFahrenheit(kelvinTemp) {
  return kelvinTemp * (9/5) - 459.67;
}

function kelvinToCelsius(kelvinTemp) {
  return kelvinTemp - 273.15;
}

// This takes the data returned and summaries it into 5 days.
// focusing on the main weather description and the temperature
function summariseForecastData(response) {
  return new Promise(function(resolve) {
    var location = response.data.city;
    var forecastData = response.data.list;
  
    var filteredData = forecastData.filter(function (v, i) {
      return i === 0 || i % 8 === 0;
    });
  
    var summarisedData = filteredData.map(function(v) {
      var weather = v.weather[0];
      return {
        id: weather.id,
        description: weather.description,
        icon: weather.icon,
        dayIcon: openWeatherCodes[weather.id.toString()].dayIcon,
        nightIcon: openWeatherCodes[weather.id.toString()].nightIcon,
        date: new Date(v.dt_txt),
        fahrenheitTempMax: kelvinToFahrenheit(v.main.temp_max),
        fahrenheitTempMin: kelvinToFahrenheit(v.main.temp_min),
        celsiusTempMax: kelvinToCelsius(v.main.temp_max),
        celsiusTempMin: kelvinToCelsius(v.main.temp_min),
        humidity: v.main.humidity,
      };
    });
  
    resolve({
      status: true,
      location: location,
      forecast: summarisedData
    });
  });
}

module.exports = {
  getForecastData,
  summariseForecastData,
  fetchCityForecast: function(city, country) {
    return axios.get(getForecastData(city, country))
      .then(summariseForecastData)
      .catch((err) => {
        return err;
      });
  }
};
