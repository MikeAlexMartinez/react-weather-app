var React = require('react');
var PropTypes = require('prop-types');

class LocationInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      city: '',
      country: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}