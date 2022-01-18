import { memo } from "react"
import { useNavigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import {  RouteType } from "./config"

import { RootState } from "../store"

type MapAllowedRoutesType = {
  routes: RouteType[] | null
}

const MapAllowedRoutes = ({ routes }: MapAllowedRoutesType) => {
  const { token } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate();

  if(!token) {
    navigate('/register');
  }
  return (
    <Routes>
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
    </Routes>
  )
}

export default memo(MapAllowedRoutes)
