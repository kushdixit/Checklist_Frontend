import React, { useEffect } from "react";
import {
  useNavigate,
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
} from "react-router-dom";
import { isUser } from "helpers/isUser";
import PrivateRoutes from "components/PrivateRoute";
import routes, { ProcessRoute } from "constants/routes";

const PublicRoutes = ({ component: RouteComponent, restricted }) => {
  const navigate = useNavigate();
  console.log("RouteComponent", RouteComponent);
  useEffect(() => {
    if (isUser()) {
      navigate(ProcessRoute.path);
    }
  }, [restricted, navigate]);
  return <RouteComponent />;
};

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
                <PublicRoutes restricted={false} component={Component} />
              )
            }
          />
        );
      })}
    </ReactRoutes>
  </BrowserRouter>
);

export default CustomRouter;
