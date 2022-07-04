import { Box } from '@mui/material';
import { Switch, Redirect } from 'react-router-dom'
import Footer from '../components/footer/DekstopFooter';
import CreateResume from '../pages/createResume/CreateResume';
import Resumes from '../pages/resumes/Resumes';
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
                    <Footer />
                </Box>
            }
        </Switch>
    )
}
