import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router'
import Master from './components/Master.jsx'

import posterChildApp from './reducers/app'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(posterChildApp)

const routes = {
  path: '#',
  component: Master,
  childRoutes: [
    { path: '/*', component: Master }
  ]
}

class Wrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
      </Provider> )
  }
}

global.Wrapper = Wrapper