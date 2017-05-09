import React from 'react'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { configureStore } from '../store'
import routes from '../routes'

const store = configureStore(browserHistory)
const { dispatch, getState } = store
const history = syncHistoryWithStore(browserHistory, store)

function Root() {
  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        {routes}
      </Router>
    </Provider>
  )
}
export default Root