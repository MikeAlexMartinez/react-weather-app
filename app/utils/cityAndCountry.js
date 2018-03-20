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
  var wordArr ;
  
  // if no comma, assume country is UK and full string is city
  if (str.indexOf(',') === -1) {
    country = 'UK';
    city = str.trim().toUpperCase();

  // check if string matches regex expression defined in 're'
  } else if (!re.test(str)) {
    valid = false;
  } else {
    wordArr = str.split(',');
    if (wordArr.length > 2) {
      valid = false;
    } else {
      city = wordArr[0].trim().toUpperCase();
      country = wordArr[1].trim().toUpperCase();
    }
  }

  return {
    city: city,
    country: country,
    isValid: valid
  };
}

/**
 * tests location provided in input is as expected
 * @param {string} str
 * @return {object} 
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
      countriesArr.indexOf(country) !== -1;
    }
    
    return {
      city: city,
      country: country,
      isValid: isValid
    };
  }
}

module.exports = {
  locationIsValid,
  splitCityAndCountry,
  countries
};