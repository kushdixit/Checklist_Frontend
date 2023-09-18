import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUser } from "helpers/isUser";
import { ProcessRoute } from "constants/routes";

const PublicRoutes = ({ component: RouteComponent, restricted, path }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      isUser() &&
      path !== "/checklists/:id" &&
      path !== "/search/:id" &&
      path !== "/:id/check" &&
      path !== "/explore" &&
      path !== "/explore/:id" &&
      path !== "/guest/:id"
    ) {
      navigate(ProcessRoute.path);
    }
  }, [restricted, navigate]);
  return <RouteComponent />;
};

export default PublicRoutes;
