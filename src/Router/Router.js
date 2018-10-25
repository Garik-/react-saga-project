import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import AppConfig from 'Config/AppConfig'
import history from 'Services/History'
import createStore from '../Redux'
import routes from './Routes'

const store = createStore(history)
class Routes extends React.Component {
  state = { loading: true }

  renderRoute = (route, index) => {
    const { exact, path, component } = route
    return (
      <Route
        key={`route:${index}`}
        exact={exact}
        path={path}
        component={component} />
    )
  }

  renderRoutes = (location) => {
    return (
      <Switch location={location}>
        {routes.map(this.renderRoute)}
      </Switch>
    )
  }

  render () {
    const isDevMode = process.env.NODE_ENV === 'development'
    const routerOptions = isDevMode ? {} : { basename: AppConfig.deployPath }
    return (
      <Provider store={store}>
        <ConnectedRouter {...routerOptions} history={history}>
          <Route render={({ location }) => (
            <div id='app-container'>
              {this.renderRoutes(location)}
            </div>
          )} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Routes
export { routes }
