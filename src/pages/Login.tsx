import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import logImage from "../assets/log1.png";
import { useLogin } from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import { showSuccessToast, showErrorToast } from "../components/ToastProvider";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login: React.FC = () => {
  const { mutate, status, error } = useLogin(); // Mutation hook for login
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    mutate(values, {
      onSuccess: () => {
        showSuccessToast("Login successful! Redirecting...");
      },
      onError: (error: any) => {
        showErrorToast(
          error.response?.data?.message || "Login failed. Please try again."
        );
      },
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-50 pt-4 md:pt-8 mb-5">
      <div className="md:w-1/2 w-full px-6 md:px-8 flex flex-col items-center justify-center text-center md:pt-0 pt-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 md:mb-4">
          Welcome to Our Secure Portal
        </h2>
        <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 leading-relaxed">
          "Login to access your dashboard, manage your tasks, and enjoy a
          seamless user experience with our highly secure platform."
        </p>
        <img
          src={logImage}
          alt="User login"
          className="w-2/3 md:w-1/3 h-auto mb-4 md:mb-6"
        />
        <p className="text-sm text-gray-600 leading-relaxed">
          Need help? Contact our{" "}
          <a
            href="/support"
            className="text-blue-600 font-medium hover:underline"
          >
            support team
          </a>{" "}
          or visit the{" "}
          <a
            href="/faq"
            className="text-blue-600 font-medium hover:underline"
          >
            FAQ section
          </a>{" "}
          for quick answers.
        </p>
      </div>

      <div className="md:w-1/2 w-full px-6 md:px-8 flex justify-center items-center md:pt-0 pt-8">
        <div className="max-w-md w-full bg-white p-6 md:p-10 shadow-md rounded-lg">
          {status === "pending" && <LoadingSpinner />} {/* Show spinner */}
          <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-4 md:mb-6">
            Welcome Back
          </h1>
          <p className="text-left text-gray-500 mb-4 md:mb-6">
            Enter your email and password to securely log in to your account.
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
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

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <InputAdornment position="end" className="absolute top-2.5 right-3">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  </div>
                  <ErrorMessage
                    name="password"
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
                  {status === "pending" ? "Logging In..." : "Log In"}
                </button>

                <div className="mt-4 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <a
                      href="/signup"
                      className="text-teal-600 hover:underline"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
