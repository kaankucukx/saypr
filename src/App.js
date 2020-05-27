import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './modules/form'
import { ConnectedRouter } from 'connected-react-router'
import { NormalizeAppStateActionCreator } from './actions/application-state.actions'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { SuccesPage } from './modules/success/lazy'
import { Redirect } from 'react-router'

function App ({ history }) {
  const dispatch = useDispatch()
  /**
   * Since we don't have a DB nor BE Services, we check if we have a state stored on LocalStorage on every render.
   */
  useEffect(() => {
    dispatch(NormalizeAppStateActionCreator())
  }, [dispatch])

  return (
    <ConnectedRouter history={history}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/tabs/:tab"
              component={Form}
            />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/tabs/1" />}
            />
            <Route
              exact
              path="/success"
              component={SuccesPage}
            />
          </Switch>
        </Suspense>
      </Router>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
