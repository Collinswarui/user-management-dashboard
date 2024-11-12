import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; 2024 User Management Dashboard. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="https://github.com/your-repo" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Documentation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
