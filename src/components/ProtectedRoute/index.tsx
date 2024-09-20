import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import config from "../../../docusaurus.config";
import { isJsonFormat } from "../../utils/formatUtils";

interface ProtectedRouteProps extends RouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  ...rest
}) => {
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
