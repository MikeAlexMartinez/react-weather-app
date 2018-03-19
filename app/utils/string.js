'use strict';

var isoCountries = require('isoCountryCodes');

var countries = isoCountries['iso-codes'].map(function (v) {
  return v.alpha2;
});

/**
 * @param {string} str
 * @return {object}
 */
function splitCityAndCountry(str) {
  
  // check for comma / format of string submitted meets required
  // expectations
  var re = /([\w\s]{2,}),([\w]{2})/;
  var valid = true;
  var city;
  var country;
  var wordArr;

  if (re.test(str)) {
    valid = false;
  } else {
    wordArr = str.split(','); 
    
    city = wordArr[0].trim();
    country = wordArr[1].trim();
  }

  return {
    city: city.toUpperCase(),
    country: country.toUpperCase(),
    isValid: valid
  };
}

/**
 * tests location provided in input is as expected
 * @param {string} str
 * @return {boolean} 
 */
function locationIsValid(str) {
  var cityAndCountry = splitCityAndCountry(str);
  if (!cityAndCountry.isValid) {
    return cityAndCountry.isValid;
  } else { 
    var city = cityAndCountry.city;
    var country = cityAndCountry.country;
    var isValid = true;
    
    // city should only contain alphanumeric characters or whitespace
    var re = /[\w\s]/g;
    
    // check city is alphanumeric
    if (isValid) {
      isValid = re.test(city);
    }
    
    // check country is present in countries list
    if (isValid) {
      countries.indexOf(country) !== -1;
    }
    
    return isValid;
  }
}

module.exports = {
  locationIsValid,
};