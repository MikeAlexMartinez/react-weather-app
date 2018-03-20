'use strict';

var isoCountries = require('./isoCountryCodes');

var countriesArr = isoCountries['iso-codes'].map(function (v) {
  return v.alpha2;
});

var countries = isoCountries['iso-codes'].reduce(function (a, b) {
  a[b.alpha2] = {
    name: b.name,
    alpha3: b.alpha3,
    number: b.number
  };

  return a;
}, {});

/**
 * @param {string} str
 * @return {object}
 */
function splitCityAndCountry(str) {
  // check for comma / format of string submitted meets required
  // expectations
  var re = /^([A-Za-z\s]{2,}),\s*([A-Za-z]{2})$/;
  var valid = true;
  var city = null;
  var country = null;
  var wordArr;
  const index = str.indexOf(',');

  // if no comma, assume country is UK and full string is city
  if (index === -1) {
    country = 'UK';
    city = str.trim().toUpperCase();
  }
  
  // check pattern matches 
  if (!re.test(str)) {
    valid = false;
  }
  
  // check if number of commas is greater than 2
  if (index != -1) {
    wordArr = str.split(',');
    if (wordArr.length > 2) {
      valid = false;
    }
    city = wordArr[0].trim().toUpperCase();
    country = wordArr[1].trim().toUpperCase();
  }

  return {
    city: city,
    country: country,
    isValid: valid
  };
}

module.exports = {
  splitCityAndCountry,
  countries
};