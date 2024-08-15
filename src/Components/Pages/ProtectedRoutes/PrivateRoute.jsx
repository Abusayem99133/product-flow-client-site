import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <h1>
        <span className="loading loading-spinner loading-lg"></span>
      </h1>
    );
  }
  if (!user) {
    return <Navigate to="/signIn" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
