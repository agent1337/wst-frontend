import { Switch, } from 'react-router-dom'
import Resumes from '../pages/resumes/Resumes';
import PrivateRoute from './PrivateRoute'

export default function AuthorizedRoutes() {
    const auth = true;
    return (
        <Switch>
            <PrivateRoute
                isAuthorized={auth}
                path="/resumes"
            >
                <Resumes />
            </PrivateRoute>

        </Switch>
    )
}
