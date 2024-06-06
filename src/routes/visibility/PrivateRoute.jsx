import { Outlet, Navigate } from "react-router-dom";
// import {useAuth} from "../../hooks/useAuth";


const PrivateRoute = () => {
    // const {isAuthenticated} = useAuth()

  if (!false) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default PrivateRoute;