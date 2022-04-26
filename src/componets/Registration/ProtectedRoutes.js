import React from "react";
import { Routes, Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  return false;
};

const ProtectedRoutes = ({ props: any }) => {
  const auth = useAuth();

  return auth === true ? (
    
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoutes;
