import { Navigate } from "react-router-dom";
import { isUser } from "helpers/isUser";

const PrivateRoute = ({ component: RouteComponent, restricted }) => {
  if (isUser() && !restricted) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
