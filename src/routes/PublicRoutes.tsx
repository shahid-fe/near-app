import { Redirect, Route, Switch } from "react-router-dom"
import { PublicRoutesMap } from "./config"

const PublicRoutes: React.FC = () => {
  return (
      <Switch>
        <Redirect exact to={PublicRoutesMap.LOGIN} from="/" />
        <Route path={PublicRoutesMap.FORGOT_PASSWORD}>
      
        </Route>
        <Route path={PublicRoutesMap.REGISTER}>
          {/* <Signup /> */}
        </Route>
      </Switch>
  )
}

export default PublicRoutes
