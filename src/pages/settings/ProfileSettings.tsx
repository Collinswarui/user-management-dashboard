import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUserById, updateUser } from "../../services/userService";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProfileSettingsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // Get userId from URL
  const navigate = useNavigate(); // For navigation
  const queryClient = useQueryClient();

  // Fetch user data
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId!),
    enabled: !!userId, // Only fetch if userId is available
  });

  // Update user mutation
  const updateMutation = useMutation({
    mutationFn: (updatedData: Partial<typeof user>) => updateUser(userId!, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      alert("User updated successfully!");
      navigate("/users"); // Redirect to the users list page
    },
    onError: (error: any) => {
      console.error("Failed to update user", error);
      alert(error?.message || "Error updating user");
    },
  });

  // Local state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "",
    role: "",
  });

  // Update state when user data is fetched
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        status: user.status,
        role: user.role,
      });
    }
  }, [user]);

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error fetching user: {String(error)}</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-teal-500">Edit User Profile</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettingsPage;
