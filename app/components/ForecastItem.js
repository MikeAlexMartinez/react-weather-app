import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-weathericons';

const ForecastItem = ({ dayOfMonth, date, icon, showDetail }) => (
  <div className='forecast-item' onClick={() => showDetail(dayOfMonth)}>
    <WeatherIcon name={icon} size='5x'/>
    <p>{date}</p>
  </div>
);

ForecastItem.propTypes = {
  dayOfMonth: PropTypes.number.isRequired,
  showDetail: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastItem;
