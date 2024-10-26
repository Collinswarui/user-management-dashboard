// src/pages/AppearanceSettings.tsx
import React from 'react';

const AppearanceSettings: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Appearance Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-600">Theme</label>
          <select className="w-full p-2 border rounded">
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600">Language</label>
          <select className="w-full p-2 border rounded">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <button className="bg-teal-500 text-white py-2 px-4 rounded mt-4">Save Changes</button>
      </div>
    </div>
  );
};

export default AppearanceSettings;
