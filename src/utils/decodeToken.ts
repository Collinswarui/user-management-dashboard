import {jwtDecode} from 'jwt-decode';

interface DecodedToken {
  userId: string; 
}

export const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }

  try {
    const decodedToken: DecodedToken = jwtDecode(token);
    return decodedToken.userId; 
  } catch (error) {
    console.error("Invalid token", error);
    throw new Error("Error decoding token");
  }
};
