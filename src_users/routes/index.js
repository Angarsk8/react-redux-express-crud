import React from "react"
import { Route, IndexRoute } from "react-router"
import App from "../containers/App"
import Home from "../components/Home"
import NewUser from "../components/NewUser"
import EditUser from "../components/EditUser"
import NotFound from "../components/NotFound"

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route
      path="users/new"
      component={NewUser}
    />
    <Route
      path="users/edit/:userId"
      component={EditUser}
    />
    <Route
      path="*"
      component={NotFound}
    />
  </Route>
)

export default routes
