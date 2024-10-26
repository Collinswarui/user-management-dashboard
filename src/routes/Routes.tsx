import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import LandingPage from "../pages/Landing";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import ProtectedLayout from "../components/ProtectedLayout";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import Settings from "../pages/settings/Settings";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Route (Dashboard) */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <ProtectedLayout>
              <DashBoard />
            </ProtectedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/users"
        element={
          <PrivateRoute>
            <ProtectedLayout>
              <Users />
            </ProtectedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <PrivateRoute>
            <ProtectedLayout>
              <Analytics />
            </ProtectedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/settings/*"
        element={
          <PrivateRoute>
            <ProtectedLayout>
              <Settings />
            </ProtectedLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Check for token in localStorage
  const isAuthenticated = localStorage.getItem("token") === "logged_in";

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AppRoutes;
