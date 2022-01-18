import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AuthRoutes from "./AuthRoutes"
import PrivateRoutes from "./PrivateRoutes"

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/app'}>
          <PrivateRoutes />
        </Route>
        <Route path="">
          <AuthRoutes />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
