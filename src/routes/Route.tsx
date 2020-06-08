import React from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
  Redirect,
} from 'react-router-dom'

import { useAuth } from '../hooks/Auth'

interface RouteProps extends ReactDOMRouterProps {
  isAuth?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
  isAuth = false,
  component: Component,
  ...resProps
}) => {
  const auth = useAuth()

  return (
    <ReactDOMRoute
      {...resProps}
      render={({ location }) => {
        return isAuth === !!auth.user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isAuth ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
