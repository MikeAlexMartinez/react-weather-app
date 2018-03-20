var React = require('react');
var PropTypes = require('prop-types');

var Link = require('react-router-dom').Link;
var Toast = require('./Toast');

var locationIsValid = require('../utils/cityAndCountry').locationIsValid;

class LocationForm extends React.Component {
  constructor (props) {
    super(props);

    var city = '';
    var country = '';
    
    // check if location is valid
    var cAndC = locationIsValid(props.location);
    
    // if valid set 
    if (cAndC.isValid) {
      city = cAndC.city;
      country = cAndC.country;
    }

    this.state = {
      location: props.location,
      city: city,
      country: country,
      valid: cAndC.isValid,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // check if value is valid,
  // if no disable button
  handleChange(event) {
    var val = event.target.value;
    var cAndC = locationIsValid(val);

    if (cAndC.isValid) {
      this.setState(function() {
        return {
          location: val,
          city: cAndC.city,
          country: cAndC.country,
          valid: cAndC.isValid,
        };
      });
    } else {
      this.setState(function() {
        return {
          location: val,
          city: '',
          country: '',
          valid: cAndC.isValid
        }; 
      });
    }
  }

  // Prevent submission if input is invalid
  handleSubmit(e) {
    if (!this.state.valid) {
      e.preventDefault();
    }
  }

  render () {
    return (
      <div className={'location-form ' + this.props.style}>
        <Toast show={!this.state.valid}>
          <p>Please provide a valid format for the location. Guidance Below:</p>
          <ul>
            <li>Format should be of the form &apos;City, Country&apos; where country is 2 characters</li>
            <li>If country is omitted it will default to the UK</li>
            <li>&apos;London, UK&apos; is valid</li>
            <li>&apos;Paris, FR&apos; is valid</li>
            <li>&apos;New York, USA&apos; is NOT valid</li>
          </ul>
        </Toast>
        {this.props.children}
        <input
          className={'location-input ' + this.props.style}
          id='location'
          placeholder={this.state.location}
          type='text'
          autoComplete='off'
          value={this.state.location}
          onChange={this.handleChange}
        />
        <Link
          className={'location-submit'}
          type='button'
          onClick={this.handleSubmit}
          to={{
            pathname: '/forecast',
            search: '?city=' + this.state.city + '&country=' + this.state.country 
          }}
        >
          Get Weather
        </Link>
      </div>
    );
  }
}

LocationForm.propTypes = {
  location: PropTypes.string,
  style: PropTypes.string,
  match: PropTypes.string,
  children: PropTypes.object,
};

LocationForm.defaultProps = {
  location: 'London, UK',
  style: 'vertical',
};

module.exports = LocationForm;
