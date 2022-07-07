import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom'
import Footer from '../components/footer/DekstopFooter';
import Schedule from '../components/schedule/Schedule';
import CreateResume from '../pages/createResume/CreateResume';
import EditResume from '../pages/editResume/EditResume';
import Resumes from '../pages/resumes/Resumes';
import ViewResume from '../pages/viewResume/ViewResume';
import PrivateRoute from './PrivateRoute'

const links = ['/sigin', '/acceptline', '/resume', '/forgot-password']

export default function AuthorizedRoutes({ auth }) {
    const isLogined = useSelector(state => state.auth.isLogined)

    return (
        <Switch>
            {auth == null && !links.includes('/' + document.location.pathname.split('/').slice(1, 2).join('/'))
                ?
                <Redirect to="/" />
                :
                <Box>
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
                    <PrivateRoute
                        isAuthorized={auth}
                        path="/schedule" >
                        <Box sx={{width: '800px', margin: '20px auto'}}>
                            <Schedule />
                        </Box>

                    </PrivateRoute>

                    <Footer />
                </Box>
            }
        </Switch>
    )
}
