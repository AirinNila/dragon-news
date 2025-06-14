import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
      return  <span className="loading loading-dots loading-xl"></span>
    }
    if(user){
        return children;
    }
    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoutes;