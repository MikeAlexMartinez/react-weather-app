var React = require('react');
var ReactRouter = require('react-router-dom');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var NavBar = require('./NavBar');
var Home = require('./Home');
var Forecast = require('./Forecast');

require('../../stylesheets/components/App.scss');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route render={function() {
              return <p>Not Found!</p>;
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
