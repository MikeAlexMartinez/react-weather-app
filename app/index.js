const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
require('weather-icons/css/weather-icons.css');

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
