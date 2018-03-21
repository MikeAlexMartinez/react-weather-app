import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  }
};

class Loading extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const { text, speed }  = this.props;
    const stopper = text + '...';
    
    this.interval = window.setInterval(() => {
      const currentText = this.state.text;
      if (currentText === stopper) {
        this.setState(() => ({
          text: text
        }));
      } else {
        this.setState((prevState) => ({
          text: prevState.text + '.',
        }));
      }
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render () {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  speed: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

Loading.defaultProps = {
  speed: 300,
  text: 'Loading'
};

export default Loading;
