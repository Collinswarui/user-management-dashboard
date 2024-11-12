import React from 'react';
import { Link } from 'react-router-dom';
import adminImage from '../assets/admin.png'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white text-center py-10 relative">
        <div className="flex flex-col md:flex-row min-h-screen items-center justify-center ">
        <div className="md:w-1/2 w-full px-4 md:px-6 ml-5 flex flex-col items-center justify-center">
        <img src={adminImage} alt="" className="" />
        </div>
        <div className="md:w-1/2 w-full px-4 md:px-6 md:mr-5 flex flex-col items-center justify-center text-center md:pt-0 pt-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Data to <span className="text-teal-600">insights</span> in minutes
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
          Explore your data, build your dashboard, and bring your team together with meaningful insights. Customize your dashboard to focus on key metrics, helping you identify trends and make data-driven decisions. Share insights easily to foster collaboration, transforming data into actionable steps for your business.          
          </p>
          <Link to="/login">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-teal-700">
              Get Started
            </button>
          </Link>
        </div>
        </div>
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/path-to-background-image)', opacity: 0.05 }} />
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About the Project</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
            Our User Management Dashboard helps administrators manage users effectively, track analytics, and ensure seamless operations. Built with modern technologies such as React, React Query, and Material UI, it offers a responsive, scalable solution for managing users.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <p className="text-gray-600">
                Add, edit, and delete users easily with our user-friendly interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Analytics & Reports</h3>
              <p className="text-gray-600">
                Gain powerful insights into user behavior with detailed analytics and reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Security & Permissions</h3>
              <p className="text-gray-600">
                Ensure secure access with role-based permissions and authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Ready to streamline your user management process? Sign up now and start using our dashboard.
          </p>
          <Link to="/signup">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-200">
              Sign Up
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
