var React = require('react');
var PropTypes = require('prop-types');

var Link = require('react-router-dom').Link;

var locationIsValid = require('../utils/cityAndCountry').locationIsValid;

class LocationInput extends React.Component {
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

  render () {
    return (
      <div className={this.props.style + ' location-form'}>
        <input
          id='location'
          placeholder={this.state.location}
          type='text'
          autoComplete='off'
          value={this.state.location}
          onChange={this.handleChange}
        />
        <Link
          className='submit'
          type='button'
          onClick={this.handleSubmit}
          disabled={!this.state.valid}
          to={}
        >
          Submit
        </Link>
      </div>
    );
  }
}

LocationInput.propTypes = {
  location: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

location.defaultProps = {
  location: 'London, UK',
  style: 'vertical',
};

module.exports = LocationInput;