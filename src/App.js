import React, { Suspense } from 'react'
import UnauthorizedRoutes from './routes/UnauthorizedRoutes';
import AuthorizedRoutes from './routes/AuthorizedRoutes';

export default function App() {
  const auth = null || localStorage.getItem('accessToken');
  
  return (
    <Suspense fallback={<></>}>
      {auth === null
        ? <UnauthorizedRoutes /> 
        : <AuthorizedRoutes />
      }
    </Suspense>
  );
}
