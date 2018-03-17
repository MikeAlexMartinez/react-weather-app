var React = require('react');
var PropTypes = require('prop-types');

var srOnlyStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px',
};

function WeatherIcon ({
  className,
  fixedWidth,
  flip,
  name,
  rotate,
  size,
  tag = 'i'
}) {
  var classNames = [];
  classNames.push('wi');
  classNames.push(`wi-${name}`);
  fixedWidth && classNames.push('wi-fw');
  flip && classNames.push(`wi-flip-${flip}`);
  rotate && classNames.push(`wi-rotate-${rotate}`);
  size && classNames.push(`wi-size-${size}`);
  // Add any custom class names at the end.
  className && classNames.push(className);
  
  var fontSize;
  switch (size) {
    case 'lg':
      fontSize = '1.33333333em';
      break;
    case '2x':
      fontSize = '2em';
      break;
    case '3x':
      fontSize = '3em';
      break;
    case '4x':
      fontSize = '4em';
      break;
    case '5x':
      fontSize = '5em';
      break;
    default:
      fontSize = 'normal';
      break;
  }

  return React.createElement(tag, {className: classNames.join(' '), style: { fontSize } });
}

WeatherIcon.displayName = 'WeatherIcons';
WeatherIcon.propTypes = {
  ariaLabel: PropTypes.string,
  border: PropTypes.bool,
  className: PropTypes.string,
  fixedWidth: PropTypes.bool,
  flip: PropTypes.oneOf(['horizontal', 'vertical']),
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
  rotate: PropTypes.oneOf([90, 180, 270]),
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: PropTypes.bool,
  stack: PropTypes.oneOf(['1x', '2x']),
  tag: PropTypes.string,
};

module.exports = {
  WeatherIcon: WeatherIcon,
  srOnlyStyle: srOnlyStyle,
};
