const {toLocaleDate} = require('../../app/utils/dates');

describe('toLocaleDate()', () => {

  const date = new Date(2018,2,20);

  test('returns the correct date string', () => {
    expect(toLocaleDate(date)).toEqual('Tuesday, Mar 20');
  });

});