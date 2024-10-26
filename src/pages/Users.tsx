// src/pages/Users.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/userService';
import { User } from '../types/User';

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch users for the current page
  const { data, isLoading, error } = useQuery<User[], Error>({
    queryKey: ['users', currentPage],
    queryFn: () => fetchUsers(currentPage),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-teal-500">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 text-white bg-teal-500 hover:bg-teal-600 rounded disabled:opacity-50"
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          disabled={currentPage === 2}
          className="px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded disabled:opacity-50"
        >
          2
        </button>
      </div>
    </div>
  );
};

export default Users;
