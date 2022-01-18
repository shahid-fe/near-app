import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { RootState } from "../store"

import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRoutes = ()  => {
  const { token } = useSelector((state: RootState) => state.auth)
  
  return (
    <Router>
      <Routes>
        <Route path={'/app'} element={<PrivateRoutes />}>
        </Route>
        <Route path={'/auth/*'} element={<PublicRoutes />}>
        </Route>
        
      </Routes>
    </Router>
  )
}

export default AppRoutes
