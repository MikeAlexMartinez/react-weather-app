import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {getForecastData,
  summariseForecastData} from '../utils/api';
import { toLocaleDate } from '../utils/dates';

import Loading from './Loading';
import ForecastItem from './ForecastItem';
import ForecastDetail from './ForecastDetail';

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
      detail: null,
      day: null,
      settings: 'celsius',
      location: '',
    };

    this.showDetail = this.showDetail.bind(this);
    this.hideDetail = this.hideDetail.bind(this);
  }

  showDetail(date) {
    const detail = this.state.forecast.reduce((a, b) => 
      b.date.getDate() === date
        ? b
        : a
      ,{});
    this.setState({
      detail,
      showDetail: true,
    });
  }

  hideDetail () {
    this.setState({
      detail: null,
      showDetail: false,
    });
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
    const { loading, forecast, error, detail: d,
      errMessage, showDetail, settings, location } = this.state;

    if (loading) {
      return (
        <div className='forecast'>
          <Loading speed={250} text='Fetching Forecast' />;
        </div>
      );
    } else if (error) {
      return (
        <div className='forecast'>
          <p>{errMessage}</p>;
        </div>
      );
    } else if (showDetail && d) {
      const date = toLocaleDate(d.date);
      const time = new Date().getHours();
      const maxTemp = d[settings + 'TempMax'];
      const minTemp = d[settings + 'TempMin'];
      return (
        <ForecastDetail
          date={date}
          icon={
            time <= 7 && time >= 19
              ? d.nightIcon
              : d.dayIcon
          }
          location={`${location.name}, ${location.country}`}
          description={d.description}
          minTemp={minTemp}
          maxTemp={maxTemp}
          humidity={d.humidity}
          hideDetail={this.hideDetail}
        />
      );
    } else if (forecast.length > 0 && !showDetail) {
      return (
        <div className='forecast'>
          <h3 className='forecast-title'>{`${location.name}, ${location.country}`}</h3>
          <div className='row'>
            {forecast.map((v) => {
              const date = toLocaleDate(v.date);
              const dayOfMonth = v.date.getDate();
              const time = new Date().getHours();
              return (
                <ForecastItem
                  key={dayOfMonth}
                  dayOfMonth={dayOfMonth}
                  showDetail={this.showDetail}
                  date={date}
                  icon={
                    time <= 7 && time >= 19
                      ? v.nightIcon
                      : v.dayIcon
                  }
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      console.log(this.state);
      return <p>Oops</p>;
    }
  }
}

Forecast.propTypes = {
  location: PropTypes.object,
};

module.exports = Forecast;
