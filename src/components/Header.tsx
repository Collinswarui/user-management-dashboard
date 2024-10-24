import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the custom menu visibility
  const navigate = useNavigate();

  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  // Handle logout (clears token and redirects to login)
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token to log the user out
    navigate("/login"); // Redirect to login page
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Section: Logo */}
        <div className="text-white font-bold text-lg">
          <h6>User Management</h6>
        </div>

        {/* Hamburger Icon: visible on small screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </button>

        {/* Links for larger screens */}
        <nav className="hidden md:flex space-x-6 text-white">
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link to="/users" className="hover:underline">
                Users
              </Link>
              <Link to="/analytics" className="hover:underline">
                Analytics
              </Link>
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to="/" className="font-semibold hover:underline">
                Home
              </Link>
              <Link to="/login" className="font-semibold hover:underline">
                Login
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Menu (visible when the hamburger menu is clicked) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-teal-600 text-white space-y-4 p-4">
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="block hover:underline">
                Dashboard
              </Link>
              <Link to="/users" className="block hover:underline">
                Users
              </Link>
              <Link to="/analytics" className="block hover:underline">
                Analytics
              </Link>
              <button onClick={handleLogout} className="block hover:underline">
                Logout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to="/" className="block font-semibold hover:underline">
                Home
              </Link>
              <Link to="/login" className="block font-semibold hover:underline">
                Login
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
