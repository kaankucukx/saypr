import React, { useEffect } from 'react';
import './assets/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './modules/form';
import { ConnectedRouter } from 'connected-react-router';
import { NormalizeAppStateActionCreator } from './actions/application-state.actions';
import { useDispatch } from 'react-redux';

function App ({ history }) {
  const dispatch = useDispatch();
  /**
   * Since we don't have a DB nor BE Services, we check if we have a state stored on LocalStorage on every render.
   */
  useEffect(() => {
    dispatch(NormalizeAppStateActionCreator());
  }, [dispatch]);

  return (
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route
            exact
            path="/tabs/:tab"
            component={Form}
          />
          <Route
            exact
            path="/"
            render={() => <div>Home</div>}
          />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
}

export default App;
