var React = require('react');

class NavBar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='right'>
          <h3>Wherether</h3>
          <h5>Telling you the weather where you are</h5>
        </div>
        <div className='left'>
          Form goes here
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {

};

module.exports = NavBar;
