import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import config from "../../../docusaurus.config";

interface ProtectedRouteProps extends RouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  ...rest
}) => {
  const isJsonFormat = (text: string) => {
    try {
      const tokens = JSON.parse(text);

      return (
        tokens.hasOwnProperty("access") && tokens.hasOwnProperty("refresh")
      );
    } catch (error) {
      localStorage.removeItem("jwt");
      return false;
    }
  };

  const tokens: string | null = localStorage.getItem("jwt");
  const isAuthenticated: boolean = !!tokens && isJsonFormat(tokens);

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
