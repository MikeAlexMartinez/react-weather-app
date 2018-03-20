import React from 'react';
import PropTypes from 'prop-types';

import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  position: 'fixed',
  width: '50%',
  left: '25%',
  top: '13vh',
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  border: '2px solid #dddad4',
  borderRadius: '5px',
  backgroundColor: '#ffce84',
  color: '#000',
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Toast = ({ show: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div 
        className='toast' 
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
        {children}
      </div>
    )}
  </Transition> 
);

Toast.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

Toast.defaultProps = {
  show: false
};

module.exports = Toast;
