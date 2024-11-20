import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../pages/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   console.log(loader);
  const location = useLocation();
  //   console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRouter;
