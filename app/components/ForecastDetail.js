import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-weathericons';

const ForecastDetail = ({ date, icon, location, description,
  minTemp, maxTemp, humidity, hideDetail }) => (
  <div className='forecast forecast-detail' onClick={() => hideDetail()}>
    <WeatherIcon name={icon} size='3x' />
    <p>{date}</p>
    <p>{location}</p>
    <p>{description}</p>
    <p>{`min temp: ${Math.round(minTemp)}`}</p>
    <p>{`max temp: ${Math.round(maxTemp)}`}</p>
    <p>{`humidity: ${humidity}`}</p>
  </div>
);

ForecastDetail.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  hideDetail: PropTypes.func.isRequired,
};

export default ForecastDetail;
