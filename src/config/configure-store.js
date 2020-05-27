import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import createRootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
export default function configureStore (preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      )
    )
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
  sagaMiddleware.run(rootSaga)

  return store
}
