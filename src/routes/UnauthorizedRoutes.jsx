import { Switch, Route } from 'react-router-dom'
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'

export default function UnauthorizedRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/signin" component={Signin} />
    </Switch>
  )
}