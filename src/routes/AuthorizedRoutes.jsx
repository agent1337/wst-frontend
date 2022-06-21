import { lazy } from 'react'
import { Switch, } from 'react-router-dom'
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

const Resumes = () => {
    return (
        <h2>resumes </h2>
    )
}