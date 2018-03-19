var React = require('react');
var PropTypes = require('prop-types');

var Link = require('react-router-dom').Link;

var isLocationValid = require('../utils/cityAndCountry').isLocationValid;

class LocationInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      location: props.val,
      city: '',
      country: '',
      valid: props.valid,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // check if value is valid,
  // if no disable button
  handleChange(event) {
    var val = event.target.value;
    var isValid = isLocationValid(val);
    this.setState(function() {
      return {
        location: val,
        valid: isValid
      };
    });
  }

  handleSubmit(event) {
    
  }

  render () {
    return (
      <div className={this.props.style}>
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
  valid: PropTypes.bool.isRequired,
};

location.defaultProps = {
  location: 'London, UK',
  style: 'vertical',
  valid: true
};

module.exports = LocationInput;