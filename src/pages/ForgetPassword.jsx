import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const email = location.state?.email || "";
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      toast.error("Please provide a valid email.");
      return;
    }

    forgetPassword(email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
        toast.success("Password reset email send. please check your email.");
      })
      .catch((error) => {
        toast.error("Failed to send password reset email. Please try again.!");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-[url('https://i.ibb.co/pW3tYqq/pexels-sebastian-804570.jpg')] bg-cover object-right">
        <div className="w-full max-w-md  p-8 space-y-6 rounded-lg bg-[#d2d4d382] shadow-xl">
          {/* Title */}
          <h2 className="text-2xl mb-10 mt-1 font-bold text-center">
            Recover your account
          </h2>

          {/* Form */}
          <form onSubmit={handleResetPassword} className="flex flex-col gap-2">
            {/* Email Field */}

            <h2 className="text-left font-semibold">Email Address:</h2>

            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Enter your email address"
              className="w-full pl-4 p-2.5 text-gray-900  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            <button className="w-full py-2 btn text-white mt-6 bg-[#d28eaef5] rounded-md hover:bg-[#e17979d7] focus:outline-none">
              Sent Code
            </button>
          </form>

          <div className="flex justify-center gap-2 font-semibold items-center">
            <Link
              to={"/auth/register"}
              className="text-red-500 hover:underline"
            >
              Register
            </Link>
            <Link to={"/auth/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
