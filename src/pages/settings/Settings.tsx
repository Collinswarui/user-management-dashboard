import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';
import NotificationSettings from './NotificationsSettings';
import AppearanceSettings from './AppearanceSettings';

const Settings: React.FC = () => {

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl text-center text-teal-500 font-bold mb-4">Settings</h1>
      
      <Routes>
        {/* Redirect to Profile if no specific section is provided */}
        <Route path="/" element={<Navigate to={`profile/:userId`} />} />

        {/* Settings Sections */}
        <Route path="profile/:userId" element={<ProfileSettings />} />
        <Route path="account" element={<AccountSettings />} />
        {/* <Route path="notifications" element={<NotificationSettings />} />
        <Route path="appearance" element={<AppearanceSettings />} /> */}
      </Routes>
    </div>
  );
};

export default Settings;
