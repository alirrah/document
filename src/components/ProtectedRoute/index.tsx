import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import config from "@site/docusaurus.config";
import { isTokenValid, getToken } from "@site/src/utils/JWTUtil";

interface ProtectedRouteProps extends RouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({
  children,
  ...rest
}: ProtectedRouteProps): JSX.Element => {
  const tokens: string | null = getToken();
  const isAuthenticated: boolean = !!tokens && isTokenValid(tokens);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${config.baseUrl}login`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
