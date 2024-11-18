import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const Register = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-lg">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center">
            Register your account
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-2 ">
            {/* Name Field */}

            <label className="block mb-1 text-sm text-left font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Photo URL Field */}

            <label className="block mb-1 text-left text-sm font-medium">
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Enter your photo URL"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Email Field */}

            <label className="block mb-1 text-sm text-left font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Password Field */}

            <label className="block mb-1 text-sm text-left font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="terms" className="rounded" />
              <label className="text-sm text-gray-700">
                Accept{" "}
                <span className="text-blue-600 cursor-pointer">
                  Term & Conditions
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full btn py-2 text-white bg-[#e7be78d7] rounded-md hover:bg-[#e3d557d7] focus:outline-none"
            >
              Register
            </button>
            <button
              type="submit"
              className="w-full btn py-2 text-white bg-blue-300 rounded-md hover:bg-blue-400 focus:outline-none felx gap-3 items-center"
            >
              <FaGoogle />
              Google Register
            </button>
          </form>
          <p className="text-center text-sm text-gray-500">
            Already Have An Account?{" "}
            <Link to="/auth/Login" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>

          {/* Register Link */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
