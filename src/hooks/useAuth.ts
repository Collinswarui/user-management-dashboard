import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  logoutUser,
  registerUser,
  User,
  AuthResponse,
} from "../services/authServices";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: User) => registerUser(userData),
    onSuccess: () => {
      navigate("/login");
    },
  });
};


export const useLogin = () => {
  const navigate = useNavigate();

  // Explicitly specify the types for mutation result
  const mutation: UseMutationResult<AuthResponse, unknown, Omit<User, "name">, unknown> = useMutation({
    mutationFn: (userData: Omit<User, "name">) => loginUser(userData),
    onSuccess: (data: AuthResponse) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      navigate("/dashboard", { replace: true });
    },
    // onError: (error: any) => {
    //   console.error("Login failed:", error.response?.data?.message || error.message);
    //   alert(error.response?.data?.message || "Something went wrong. Please try again.");
    // },
  });

  return mutation;
};

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/login");
    },
  });
};
