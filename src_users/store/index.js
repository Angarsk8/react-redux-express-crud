import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import freeze from "redux-freeze"
import rootReducer from '../reducers'
import sagas from '../sagas'

export function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(history)
  let middlewares = [sagaMiddleware, routerMiddleware]
  let composeEnhancers = compose

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
      predicate: (getState, action) => (
        action.type !== '@@router/LOCATION_CHANGE'
      )
    })
    middlewares = [ ...middlewares, logger, freeze ]
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }


  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  sagaMiddleware.run(sagas)

  return store
}