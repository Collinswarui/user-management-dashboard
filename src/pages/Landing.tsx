import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">User Management Dashboard</h1>
          <p className="text-lg mb-8">
            Simplify user management and gain powerful insights with our intuitive dashboard.
          </p>
          <Link to="/login">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About the Project</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Our User Management Dashboard helps administrators manage users effectively, track analytics, and ensure seamless operations.
            Built with modern technologies such as React, React Query, and Material UI, it offers a responsive, scalable solution for managing users.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <p className="text-gray-600">
                Add, edit, and delete users easily with our user-friendly interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analytics & Reports</h3>
              <p className="text-gray-600">
                Gain powerful insights into user behavior with detailed analytics and reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Security & Permissions</h3>
              <p className="text-gray-600">
                Ensure secure access with role-based permissions and authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg mb-8">
            Ready to streamline your user management process? Sign up now and start using our dashboard.
          </p>
          <Link to="/register">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
              Sign Up
            </button>
          </Link>
        </div>
      </section>

      
    </div>
  );
};

export default LandingPage;
