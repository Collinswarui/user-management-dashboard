import React from 'react';

const AccountSettings: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Account Settings</h2>
      <div className=" gap-4">
        <button className="bg-blue-500 text-white mr-4 py-2 px-4 rounded">Link Google Account</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded mt-4">Delete Account</button>
      </div>
    </div>
  );
};

export default AccountSettings;
