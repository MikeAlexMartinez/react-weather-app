var React = require('react');
var App = require('../../app/components/App');
var renderer = require('react-test-renderer');

test('<App />', function() {

  var component = renderer.create(<App />);
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});