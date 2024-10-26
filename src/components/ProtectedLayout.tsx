import React from 'react';
import Sidebar from './SideBar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-grow"> 
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
