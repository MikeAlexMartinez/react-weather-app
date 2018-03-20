import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {getForecastData,
  summariseForecastData} from '../utils/api';
import { toLocaleDate } from '../utils/dates';

import Loading from './Loading';
import ForecastItem from './ForecastItem';

class Forecast extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      forecast: [],
      days: 5,
      loading: true,
      error: false,
      errMessage: '',
      showDetail: false,
      day: null,
      settings: 'celsius',
      location: '',
    };

  }

  componentDidMount() {
    const { city, country } = queryString.parse(this.props.location.search);

    getForecastData(city, country)
      .then(summariseForecastData)
      .then(({ location, forecast }) => {
        this.setState({
          location,
          forecast,
          loading: false,
          errMessage: '',
          error: false,
          days: 5,
        });
      })
      .catch((err) => {
        console.warn(err);
        Object.keys(err).forEach(({ response }) => {
          const { message } = response.data;
          this.setState({
            location: '',
            forecast: [],
            loading: false,
            errMessage: message,
            error: true,
            days: 5,
          });
        });
      });
  }
  
  render() {
    const { loading, forecast, error, 
      errMessage, showDetail, settings } = this.state;

    if (loading) {
      return <Loading speed={250} text='Fetching Forecast' />;
    } else if (error) {
      return <p>{errMessage}</p>;
    } else if (forecast.length > 0 && !showDetail) {
      return (
        <div className='forecasts'>
          {forecast.map((v) => {
            const date = toLocaleDate(v.date);
            return (
              <ForecastItem
                key={v.date.getDate()}
                date={date}
                dayIcon={v.dayIcon}
                nightIcon={v.nightIcon}
                time={new Date().getDate()}
              />
            );
          })}
        </div>
      );
    } else {
      return <p>Oops</p>;
    }
  }
}

Forecast.propTypes = {
  location: PropTypes.object,
};

module.exports = Forecast;
