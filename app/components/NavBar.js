var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

var LocationForm = require('./LocationForm');
var Toast = require('./Toast');

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='left'>
          <Link
            to={'/'}
          >
            <h3 className='title'>Wherether</h3>
          </Link>
          <h5 className='subtitle'>Telling you the weather where you are</h5>
        </div>
        <div className='right'>
          <LocationForm style='horizontal' />
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.object,
};

module.exports = NavBar;
