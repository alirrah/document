import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import config from "../../docusaurus.config";

interface ProtectedRouteProps extends RouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  ...rest
}) => {
  const token: string | null = localStorage.getItem("jwt");
  const isAuthenticated: boolean = !!token;

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
