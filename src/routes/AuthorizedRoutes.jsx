import { Box } from '@mui/material';
import { Switch, Redirect } from 'react-router-dom'
import Footer from '../components/footer/DekstopFooter';
import CreateResume from '../pages/createResume/CreateResume';
import EditResume from '../pages/editResume/EditResume';
import Resumes from '../pages/resumes/Resumes';
import ViewResume from '../pages/viewResume/ViewResume';
import PrivateRoute from './PrivateRoute'

const links = ['/sigin', '/acceptline', '/resume', '/forgot-password']

export default function AuthorizedRoutes({ auth }) {
    return (
        <Switch>
            {auth == null && !links.includes('/' + document.location.pathname.split('/').slice(1, 2).join('/'))
                ?
                <Redirect to="/" />
                :
                <Box sx={{}}>
                    <PrivateRoute
                        isAuthorized={auth}
                        path="/resumes"
                    >
                        <Resumes />
                    </PrivateRoute>
                    <PrivateRoute
                        isAuthorized={auth}
                        path="/resume/create"
                    >
                        <CreateResume />
                    </PrivateRoute>
                    <PrivateRoute
                        isAuthorized={auth} 
                        path="/cv/:id" >
                        <ViewResume />
                    </PrivateRoute>
                    <PrivateRoute
                        isAuthorized={auth} 
                        path="/edit/:id" >
                        <EditResume />
                    </PrivateRoute>

                    <Footer />
                </Box>
            }
        </Switch>
    )
}
