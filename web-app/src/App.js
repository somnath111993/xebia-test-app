import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/loggedOut" render={() => <div>Logged Out!</div>} />
        </Switch>
      </Router>
    </Provider>
  );
};
App.propTypes = {
  store: PropTypes.object.isRequired
};
export default App;
