import { Switch, Route } from 'react-router-dom'
import AcceptLine from '../pages/auth/AcceptLine'
import Signin from '../pages/auth/Signin'
import Signup from '../pages/auth/Signup'

export default function UnauthorizedRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/acceptline" component={AcceptLine} />
    </Switch>
  )
}