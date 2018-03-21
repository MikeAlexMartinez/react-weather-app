var cAndCUtils = require('../../app/utils/cityAndCountry');

var splitCityAndCountry = cAndCUtils.splitCityAndCountry;

// 
describe('splitCityAndCountry()', function () {

  test('should split correctly formatted strings', function () {
    var testOne = splitCityAndCountry('London, uk');
    expect(testOne).toEqual({
      city: 'LONDON',
      country: 'UK',
      isValid: true
    });
  });

  test('it shouldn\'t process strings with two or more commas', function () {
    var testTwo = splitCityAndCountry('London, UK, UK');
    expect(testTwo).toEqual({
      city: null,
      country: null,
      isValid: false
    });
  });

  test('it should default country to UK if only city provided', function () {
    var testOne = splitCityAndCountry('London');
    expect(testOne).toEqual({
      city: 'LONDON',
      country: 'UK',
      isValid: true
    });
  });

  test('shouldn\'t process strings with numbers in',function () {
    var testTwo = splitCityAndCountry('1London, UK');
    expect(testTwo).toEqual({
      city: null,
      country: null,
      isValid: false
    });
  });

  test('a space isn\'t required after the comma', function () {
    var testOne = splitCityAndCountry('paris,FR');
    expect(testOne).toEqual({
      city: 'PARIS',
      country: 'FR',
      isValid: true
    });
  });
});
