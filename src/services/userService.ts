import axios from "axios";
import { User } from "../types/User";

const API_URL = "http://localhost:5000/api/users";
const USERS_PER_PAGE = 10;

export const fetchUsers = async (
  page: number = 1
): Promise<{ users: User[]; pagination: any }> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Not authorized");
    }

    const response = await axios.get(`${API_URL}/all-users`, {
      params: { page, limit: USERS_PER_PAGE },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return {
      users: response.data.data.map((user: any) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        role: user.isAdmin ? "Admin" : "User",
        status: "Active",
      })),
      pagination: response.data.pagination,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [], pagination: null };
  }
};

export const updateUser = async (
  userId: string,
  userData: { name: string; password: string }
) => {
  const token = localStorage.getItem("token");
  return await axios.patch(`${API_URL}/update-user/${userId}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteUser = async (userId: string) => {
  const token = localStorage.getItem("token");
  return await axios.delete(`${API_URL}/delete-user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// New service to fetch a single user by ID
export const fetchUserById = async (userId: string): Promise<User> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Not authorized");
    }

    const response = await axios.get(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    // Log the response to debug the structure
    console.log("Response data:", response.data);

    const user = response.data?.data || response.data; // Support both { data: user } and raw user object
    if (!user || !user._id) {
      throw new Error("Invalid user data");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      role: user.isAdmin ? "Admin" : "User",
      active: user.active || "Active",
    };
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error("Failed to fetch user data");
  }
};

