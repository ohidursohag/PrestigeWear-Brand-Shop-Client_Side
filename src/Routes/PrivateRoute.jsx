import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProvider";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
const PrivateRoute = ({ children }) => {
   const { user,loading } = useContext(AuthContext)
   const loc = useLocation()
   if (loading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (user) {
      return children;
   }
   return <Navigate state={loc.pathname} to='/signin'></Navigate>
};

PrivateRoute.propTypes = {
   children: PropTypes.node.isRequired
}
export default PrivateRoute;