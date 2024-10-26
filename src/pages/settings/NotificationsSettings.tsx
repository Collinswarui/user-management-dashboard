// src/pages/NotificationSettings.tsx
import React from 'react';

const NotificationSettings: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notification Settings</h2>
      <form className="space-y-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Email Notifications
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Push Notifications
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          In-App Notifications
        </label>
        <button className="bg-teal-500 text-white py-2 px-4 rounded mt-4">Save Changes</button>
      </form>
    </div>
  );
};

export default NotificationSettings;
