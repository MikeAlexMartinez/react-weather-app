import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

const ForecastItem = ({ date, dayIcon, nightIcon, time }) => {
  return (
    <div className='forecast-item'>
      <p>{date}</p>
    </div>
  );
};

ForecastItem.propTypes = {
  date: PropTypes.string.isRequired,
  dayIcon: PropTypes.string.isRequired,
  nightIcon: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ForecastItem;
