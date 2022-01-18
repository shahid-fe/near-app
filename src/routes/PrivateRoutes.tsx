import { memo } from "react"
import { PrivateRoutesMap } from "./config"
import MapAllowedRoutes from "./MapAllowedRoutes"

const PrivateRoutes = () => {

  return <MapAllowedRoutes routes={PrivateRoutesMap} />
}

export default memo(PrivateRoutes)
