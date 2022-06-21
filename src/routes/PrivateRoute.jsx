import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({
  path,
  isAuthorized,
  children,
  ...props
}) {
  if (!isAuthorized) {
    return <Redirect to="/" />
  }

  return (
    <Route path={path} {...props}>
      {children}
    </Route>
  )
}