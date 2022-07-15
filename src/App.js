import React, { useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import ForgotPassword from './pages/auth/ForgotPassword';
import Resumes from './pages/resumes/Resumes';
import ViewResume from './pages/viewResume/ViewResume';
import AcceptLine from './pages/auth/AcceptLine';
import CreateResume from './pages/createResume/CreateResume';
import EditResume from './pages/editResume/EditResume';
import AuthLayout from './layouts/AuthLayout';
import ResumeLayout from './layouts/ResumeLayout';
import MainLayout from './layouts/MainLayout';
import PageNotFound from './pages/auth/PageNotFound';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Layout {...props}>
        <Component {...props} {...rest} />
      </Layout>
    )} />
  )
}

export default function App() {
  const [user] = useState(localStorage.getItem('accessToken'));

  return (
    <BrowserRouter>
      <Switch>

        <AppRoute path="/resumes/:id" layout={ResumeLayout} component={ViewResume} />
        <AppRoute path="/resumes/others/:id" layout={ResumeLayout} component={ViewResume} />

        {user === null
          &&
          <>
            <Redirect to="/" />
            <AppRoute exact path="/" layout={AuthLayout} component={Signup} />
            <AppRoute path="/signin" layout={AuthLayout} component={Signin} />
            <AppRoute path="/acceptline" layout={AuthLayout} component={AcceptLine} />
            <AppRoute path="/forgot-password" layout={AuthLayout} component={ForgotPassword} />
          </>
        }

        <AppRoute exact path="/resumes" layout={MainLayout} component={Resumes} props={user} />
        <AppRoute path="/create" layout={MainLayout} component={CreateResume} props={user} />
        <AppRoute path="/edit/:id" layout={MainLayout} component={EditResume} props={user} />

        <Route path='*' exact={true} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}