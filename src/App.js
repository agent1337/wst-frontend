import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
import Test from './pages/Test';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_IN_SUCCESS } from './redux/auth/auth.types';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Layout {...rest} {...props}>
        <Component {...props} {...rest} />
      </Layout>
    )} />
  )
}

export default function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    dispatch({ type: SIGN_IN_SUCCESS, payload: accessToken })
  }, [])

  return (
    <BrowserRouter>
      <Switch>

        <AppRoute path="/resumes/:id" layout={ResumeLayout} component={ViewResume} />
        <AppRoute path="/resumes/others/:id" layout={ResumeLayout} component={ViewResume} />


        <AppRoute exact path="/" layout={AuthLayout} component={Signup} />
        <AppRoute path="/signin" layout={AuthLayout} component={Signin} />
        <AppRoute path="/acceptline" layout={AuthLayout} component={AcceptLine} />
        <AppRoute path="/forgot-password" layout={AuthLayout} component={ForgotPassword} />

        <AppRoute exact path="/resumes" layout={MainLayout} component={Resumes} token={token} />
        <AppRoute path="/create" layout={MainLayout} component={CreateResume} token={token} />
        <AppRoute path="/edit/:id" layout={MainLayout} component={EditResume} token={token} />
        <AppRoute path="/test" layout={MainLayout} component={Test} token={token} />

        <Route path='*' exact={true} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}