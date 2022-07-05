import React, { Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UnauthorizedRoutes from './routes/UnauthorizedRoutes';
import AuthorizedRoutes from './routes/AuthorizedRoutes';
import Header from './components/header/Header';
import { useSelector } from 'react-redux';

export default function App() {
  const [auth] = useState(null || localStorage.getItem('accessToken'));
  const location = useLocation();
  const { pathname } = location;
  const isLogin = useSelector(state => state.auth.isLogined)
  
  return (
    <Suspense fallback={<></>}>
      {(pathname !== "/" &&
        pathname !== "/signin" &&
        pathname !== "/forgot-password") &&
        <Header />
      }
      {auth === null
        ? <UnauthorizedRoutes />
        : <AuthorizedRoutes auth={auth}/>
      }
    </Suspense>
  );
}
