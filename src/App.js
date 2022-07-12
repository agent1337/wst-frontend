import React, { useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import { Box } from '@mui/material';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import ForgotPassword from './pages/auth/ForgotPassword';
import Footer from './components/footer/Footer';
import Resumes from './pages/resumes/Resumes';
import ViewResume from './pages/viewResume/ViewResume';
import AcceptLine from './pages/auth/AcceptLine';
import CreateResume from './pages/createResume/CreateResume';
import EditResume from './pages/editResume/EditResume';
import AuthLayout from './layouts/AuthLayout';
import ResumeLayout from './layouts/ResumeLayout';
import MainLayout from './layouts/MainLayout';

export default function App() {
  const [user] = useState(localStorage.getItem('accessToken'));

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
      <Route {...rest} render={props => (
        <Layout {...props}>
          <Box>
            <Component {...props} {...rest} />
          </Box>
        </Layout>
      )} />
    )
  }

  // const AuthLayout = props => (
  //   <div className="app-wrapper">
  //     <Box>
  //       {props.children}
  //     </Box>
  //   </div>
  // )

  // const ResumeLayout = props => (
  //   <div className="app-wrapper">
  //     <Header />
  //     {props.children}
  //     <Footer />
  //   </div>
  // )

  // const MainLayout = props => {
  //   return user ? (
  //     <div className="container">
  //       <Header />
  //       {props.children}
  //       <Footer />
  //     </div>
  //   ) : <Redirect to="/" />
  // }

  return (
    <BrowserRouter>
      <Switch>

        <AppRoute exact path="/" layout={AuthLayout} component={Signup} />
        <AppRoute path="/signin" layout={AuthLayout} component={Signin} />
        <AppRoute path="/acceptline" layout={AuthLayout} component={AcceptLine} />
        <AppRoute path="/forgot-password" layout={AuthLayout} component={ForgotPassword} />

        <AppRoute path="/resumes/:id" layout={ResumeLayout} component={ViewResume} />

        <AppRoute exact path="/resumes" layout={MainLayout} component={Resumes} props={user} />
        <AppRoute exact path="/resume/create" layout={MainLayout} component={CreateResume} props={user}/>
        <AppRoute exact path="/resume/edit" layout={MainLayout} component={EditResume} props={user}/>

      </Switch>
    </BrowserRouter>
  )
}