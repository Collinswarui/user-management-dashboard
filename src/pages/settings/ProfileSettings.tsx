// src/pages/ProfileSettings.tsx
import React from 'react';

const ProfileSettings: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">Name</label>
          <input type="text" placeholder="Your name" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <input type="email" placeholder="Your email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-600">Password</label>
          <input type="password" placeholder="New password" className="w-full p-2 border rounded" />
        </div>
        <button className="bg-teal-500 text-white py-2 px-4 rounded mt-4">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
