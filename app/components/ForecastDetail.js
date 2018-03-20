import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

class ForecastDetail extends React.Component {
  render() {
    const { date, location, description, minTemp, maxTemp, humidity, ...rest } = this.props;
    const hours = new Date().getHours();
    let time = 'nightIcon';
  
    if (hours > 7 && hours <= 7) {
      time = 'dayIcon';
    }
    
    const icon = rest[time];

    return (
      <div className='forecast forecast-detail'>
        <WeatherIcon name={icon} size='3x' />
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>
        <p>{`min temp: ${minTemp}`}</p>
        <p>{`max temp: ${maxTemp}`}</p>
        <p>{`humidity: ${humidity}`}</p>
      </div>
    );
  }
}

ForecastDetail.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default ForecastDetail;
