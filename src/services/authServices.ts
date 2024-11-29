import axios from "axios";

const API_URL = 'http://localhost:5000/api/users';

export interface User {
  name: string;
  email: string;
  password?: string;
  confirmPassword?:string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  rest?: User;

}

export const registerUser = async (userData: User): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `${API_URL}/register`,
    userData
  );
  return response.data;
};

export const loginUser = async (
  userData: Omit<User, "name">
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, userData);
  return response.data;
};

export const logoutUser = async (): Promise<{ message: string }> => {
  const response = await axios.post<{ message: string }>(`${API_URL}/logout`);
  return response.data;
};
