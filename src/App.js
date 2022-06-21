import React, { Suspense } from 'react'
import UnauthorizedRoutes from './routes/UnauthorizedRoutes';
import AuthorizedRoutes from './routes/AuthorizedRoutes';

export default function App() {
  const auth = false;

  return (
    <Suspense fallback={<></>}>
      {!auth 
        ? <UnauthorizedRoutes /> 
        : <AuthorizedRoutes />
      }
    </Suspense>
  );
}
