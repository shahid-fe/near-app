import { memo } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import {  RouteType } from "./config"

import { RootState } from "../store"

type MapAllowedRoutesType = {
  routes: RouteType[] | null
}

const MapAllowedRoutes = ({ routes }: MapAllowedRoutesType) => {
  const { token } = useSelector((state: RootState) => state.auth)
  const history = useHistory();

  if(!token) {
    history.push('/login');
  }
  return (
    <Switch>
      {routes?.map(route => {
        const { path, component: Component, title, ...rest } = route
        return path && Component ? (
          <Route {...rest} key={`PrivateRoute-${path}`} path={path}>
            <Component name={title} />
          </Route>
        ) : (
          ""
        )
      })}
    </Switch>
  )
}

export default memo(MapAllowedRoutes)
