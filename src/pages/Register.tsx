import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logImage from "../assets/log1.png";
import { useRegister } from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner"; // Spinner Component
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { showErrorToast, showSuccessToast } from "../components/ToastProvider";

const Register: React.FC = () => {
  const navigate = useNavigate(); // React Router navigation
  const { mutate, status } = useRegister(); // Custom hook for registration
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    mutate(values, {
      onSuccess: () => {
        showSuccessToast("Registration successful! Redirecting...");
      },
      onError: (error: any) => {
        showErrorToast(
          error.response?.data?.message || "An error occurred. Please try again."
        );
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-gray-50 pt-16 pb-20">
        <div className="flex flex-col md:flex-row w-full max-w-screen-lg items-center justify-center">
          <div className="md:w-1/2 w-full px-6 md:px-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 md:mb-4">
              Welcome to Our Secure Portal
            </h2>
            <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 leading-relaxed">
              "Sign up to access your dashboard, manage your tasks, and enjoy a
              seamless user experience with our highly secure platform."
            </p>
            <img
              src={logImage}
              alt="User sign up"
              className="w-2/3 md:w-1/3 h-auto mb-4 md:mb-6"
            />
          </div>

          {/* Right Section: Register Form */}
          <div className="md:w-1/2 w-full px-6 md:px-8 flex justify-center items-center">
            <div className="max-w-md w-full bg-white p-6 md:p-10 shadow-md rounded-lg">
              {status === "pending" && <LoadingSpinner />}
              <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-4 md:mb-6">
                Sign Up
              </h1>

              {/* Display server message */}
              {serverMessage && (
                <div
                  className={`mb-4 text-center text-sm ${
                    serverMessage.includes("successful")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {serverMessage}
                </div>
              )}

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium">
                        Name
                      </label>
                      <Field
                        name="name"
                        type="text"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium">
                        Email Address
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium">
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"}
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <InputAdornment
                          position="end"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Field
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <InputAdornment
                          position="end"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <IconButton onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "pending"}
                      className={`w-full text-white py-2 px-4 rounded-md flex items-center justify-center ${
                        status === "pending"
                          ? "bg-teal-400 cursor-not-allowed"
                          : "bg-teal-600 hover:bg-teal-700"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      {status === "pending" ? "Signing Up..." : "Sign Up"}
                    </button>

                    <div className="mt-4 text-center">
                      <p className="text-gray-600">
                        Already have an account?{" "}
                        <a
                          href="/login"
                          className="text-teal-600 hover:underline"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
