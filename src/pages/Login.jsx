import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-lg shadow-xl">
          {/* Title */}
          <h2 className="text-2xl mb-10 mt-1 font-bold text-center">
            Login your account
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-2">
            {/* Email Field */}

            <h2 className="text-left font-semibold">Email Address:</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full pl-4 p-2.5 text-gray-900  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Password Field */}
            <h2 className="text-left font-semibold">Password:</h2>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full pl-10 p-2.5  bg-gray-200  text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />
            <Link
              to="/auth/forgetPassword"
              className="text-blue-400 underline font-light"
            >
              Forget password
            </Link>

            <button
              type="submit"
              className="w-full py-2 btn text-white mt-6 bg-[#98a13ad7] rounded-md hover:bg-[#c1c349e8] focus:outline-none"
            >
              Login
            </button>

            <button
              type="submit"
              className="w-full btn py-2 text-white bg-blue-300 rounded-md hover:bg-blue-400 focus:outline-none felx gap-3 items-center"
            >
              <FaGoogle />
              Google Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500">
            Don’t Have An Account?{" "}
            <Link
              to={"/auth/register"}
              className="text-red-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
