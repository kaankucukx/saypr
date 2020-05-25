import React from 'react';
import './assets/App.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Form from './modules/form';


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>Home</div>}
        />
        <Route
          path="/tabs/:tab?"
          component={Form}
        />
      </Switch>
    </Router>
  );
}

export default App;
