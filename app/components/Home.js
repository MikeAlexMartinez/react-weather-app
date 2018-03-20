var React = require('react');

var LocationForm = require('./LocationForm');

class Home extends React.Component {
  render() {
    return (
      <div className='main home'>
        <LocationForm style='vertical'>
          <h2>Enter a City and Country</h2>
        </LocationForm>
      </div>
    );
  }
}

module.exports = Home;
