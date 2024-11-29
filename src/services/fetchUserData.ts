import axios from "axios";

export const fetchUserData = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Not authorized");
    }
    
    const response = await axios.get(
      "http://localhost:5000/api/users/users-data",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Error fetching dashboard data");
  }
};
