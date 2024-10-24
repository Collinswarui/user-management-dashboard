import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import React from "react";
import LandingPage from "../pages/Landing";
import Register from "../pages/Register";

const AppRoutes: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default AppRoutes;
