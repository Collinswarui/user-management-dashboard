import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, deleteUser } from "../services/userService"; // Import delete service
import LoadingSpinner from "../components/LoadingSpinner";
import { UsersResponse, User } from "../types/User"; // Import types
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Fetch users
  const { data, isLoading, error } = useQuery<UsersResponse>({
    queryKey: ["users", currentPage],
    queryFn: () => fetchUsers(currentPage),
    keepPreviousData: true,
  });

  // Delete user mutation
  const deleteMutation = useMutation({
    mutationFn: (userId: string) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error: any) => {
      console.error("Failed to delete user", error);
      alert(error?.message || "Error deleting user");
    },
  });

  // Handle redirect to profile settings page
  const handleEditClick = (userId: string) => {
    navigate(`/settings/profile/${userId}`); // Redirect to the user's profile settings page
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error fetching users: {String(error)}</p>;

  return (
    <div className="min-h-screen p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-teal-500">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Edit</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEditClick(user.id)} // Trigger redirection
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    type="button"
                    onClick={() => deleteMutation.mutate(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: data?.pagination?.totalPages || 1 },
          (_, index) => index + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
            className="px-4 py-2 mr-2 text-white bg-teal-500 hover:bg-teal-600 rounded disabled:opacity-50"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
