import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import PrivateRoutes from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import routes from "constants/routes";

const CustomRouter = () => (
  <BrowserRouter>
    <ReactRoutes>
      {routes.map((route, index) => {
        const { component: Component, path, restricted } = route;
        return (
          <Route
            key={index}
            path={path}
            element={
              restricted ? (
                <PrivateRoutes component={Component} />
              ) : (
                <PublicRoute
                  restricted={false}
                  component={Component}
                  path={path}
                />
              )
            }
          />
        );
      })}
    </ReactRoutes>
  </BrowserRouter>
);

export default CustomRouter;
