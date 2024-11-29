// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Additional icons for Settings submenu
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaletteIcon from '@mui/icons-material/Palette';

const Sidebar: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSettingsMenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`min-h-screen bg-gray-100 text-teal-500 font-semibold ${isCollapsed ? 'w-16' : 'w-64'} 
      hidden md:flex flex-col transition-width duration-300 p-4 shadow-md`}
    >
      {/* Sidebar Toggle Button (Visible only on larger screens) */}
      <button onClick={toggleSidebar} className="text-teal-500 mb-4 hidden md:block">
        {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </button>

      {/* Main Menu */}
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="flex items-center hover:text-teal-500">
            <DashboardIcon />
            {!isCollapsed && <span className="ml-4">Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link to="/users" className="flex items-center hover:text-teal-500">
            <PeopleIcon />
            {!isCollapsed && <span className="ml-4">Users</span>}
          </Link>
        </li>

        <li>
          <Link to="/analytics" className="flex items-center hover:text-teal-500">
            <BarChartIcon />
            {!isCollapsed && <span className="ml-4">Analytics</span>}
          </Link>
        </li>

        {/* Settings with Dropdown */}
        <li className="relative">
          <button
            onClick={toggleSettingsMenu}
            className="flex items-center w-full hover:text-teal-500 focus:outline-none"
          >
            <SettingsIcon />
            {!isCollapsed && (
              <>
                <span className="ml-4">Settings</span>
                {isSettingsOpen ? <ExpandLessIcon className="ml-auto" /> : <ExpandMoreIcon className="ml-auto" />}
              </>
            )}
          </button>

          {/* Dropdown Menu for Settings */}
          {isSettingsOpen && !isCollapsed && (
            <ul className="mt-2 ml-14 text-sm space-y-2 text-teal-400">
              {/* <li>
                <Link to="/settings/profile" className="flex items-center hover:text-teal-500">
                  <PersonIcon className="mr-2" />
                  Profile
                </Link>
              </li> */}
              <li>
                <Link to="/settings/account" className="flex items-center hover:text-teal-500">
                  <AccountCircleIcon className="mr-2" />
                  Account
                </Link>
              </li>
              {/* <li>
                <Link to="/settings/notifications" className="flex items-center hover:text-teal-500">
                  <NotificationsIcon className="mr-2" />
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="/settings/appearance" className="flex items-center hover:text-teal-500">
                  <PaletteIcon className="mr-2" />
                  Appearance
                </Link>
              </li> */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
