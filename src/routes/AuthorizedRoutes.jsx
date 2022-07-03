import { Box } from '@mui/material';
import { Switch, } from 'react-router-dom'
import Footer from '../components/footer/DekstopFooter';
import Header from '../components/header/Header';
import CreateResume from '../pages/createResume/CreateResume';
import Resumes from '../pages/resumes/Resumes';
import PrivateRoute from './PrivateRoute'

export default function AuthorizedRoutes() {
    const auth = true;
    return (
        <Switch>
            <Box sx={{}}>
                <Header/>
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
        </Switch>
    )
}
