'use strict';

function toLocaleDate(date) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'];
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  let str = '';

  // append day as long text
  str += `${weekdays[date.getDay()]}, `;
  // append month as as three character format
  str += `${months[date.getMonth()]} `;
  // append date as number
  str += `${date.getDate()}`;

  return str;
}

module.exports = {toLocaleDate};