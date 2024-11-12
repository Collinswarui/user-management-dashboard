import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logImage from "../assets/log1.png";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    localStorage.setItem("token", "logged_in"); 
    navigate("/dashboard");
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
              "Sign up to access your dashboard, manage your tasks, and enjoy a seamless user experience with our highly secure platform."
            </p>
            <img
              src={logImage}
              alt="User sign up"
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
              <a href="/faq" className="text-blue-600 font-medium hover:underline">
                FAQ section
              </a>{" "}
              for quick answers.
            </p>
          </div>

          {/* Right Section: Register Form */}
          <div className="md:w-1/2 w-full px-6 md:px-8 flex justify-center items-center">
            <div className="max-w-md w-full bg-white p-6 md:p-10 shadow-md rounded-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-4 md:mb-6">
                Sign Up
              </h1>
              <p className="text-left text-gray-500 mb-4 md:mb-6">
                Create your account by filling out the information below.
              </p>

              <Formik
                initialValues={{ name: "", email: "", password: "" }}
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

                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium">
                        Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Sign Up
                    </button>

                    <div className="mt-4 text-center">
                      <p className="text-gray-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-teal-600 hover:underline">
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
