import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-weathericons';

const ForecastItem = ({ date, icon }) => {
  return (
    <div className='forecast-item'>
      <WeatherIcon name={icon} size='5x' />
      <p>{date}</p>
    </div>
  );
};

ForecastItem.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastItem;
