import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AdminPage from "../../pages/admin/AdminPage.tsx";

const PrivateRouter = () => {

   const navigate = useNavigate(); // For programmatic navigation
   const location = useLocation(); // For detecting route changes

   // Check token every time the route changes
   useEffect(() => {
     const token = localStorage.getItem("tokenIsAdmin");

     if (!token && location.pathname.startsWith("/admin")) {
       // If token is missing and we are on an admin route, redirect to login
       navigate("/adminLogin");
     }
   }, [location, navigate]);

  

  const token = localStorage.getItem("tokenIsAdmin");

  if (!token) {
    <Navigate to="/adminLogin" state={{ form: location }} />;
  }
  return <AdminPage />;
};

export default PrivateRouter;
