var React = require('react');
var ReactRouter = require('react-router-dom');
var WeatherIcon = require('./WeatherIcon').WeatherIcon;

require('../../stylesheets/components/App.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <WeatherIcon name="cloud" size="4x" />
      </div>
    );
  }
}

module.exports = App;
