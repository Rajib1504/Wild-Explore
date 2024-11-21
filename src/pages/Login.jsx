import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  // console.log(email);
  const { login, setUser, logInbyGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const handelgoogle = () => {
    logInbyGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success("Login successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="flex p-2 items-center justify-center min-h-screen bg-[url('https://i.ibb.co/vQvMH9z/pexels-visitalmaty-848599.jpg')] bg-cover object-scale-down scroll-m-3">
        <div className="w-full max-w-md p-8 space-y-6  bg-[#7ae1e152] rounded-lg shadow-xl">
          {/* Title */}
          <h2 className="text-2xl mb-10 mt-1 font-bold text-center">
            Login your account
          </h2>

          {/* Form */}
          <form onSubmit={handelSubmit} className="flex flex-col gap-2">
            <h2 className="text-left font-semibold">Email Address:</h2>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email address"
              className="w-full pl-4 p-2.5 text-gray-900  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Password Field */}
            <h2 className="text-left font-semibold">Password:</h2>
            <div
              className={`w-full p-2.5 bg-gray-200 text-gray-900 border border-gray-300 rounded-md focus-within:border-gray-500 flex justify-between items-center`}
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="bg-gray-200 w-full border-0 focus:outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </div>
            </div>

            <Link
              to="/auth/forgetPassword"
              state={{ email }}
              className="text-red-400 underline font-light"
            >
              Forget password
            </Link>

            <button
              type="submit"
              className="w-full py-2 btn text-white mt-6 bg-[#98a13ad7] rounded-md hover:bg-[#c1c349e8] focus:outline-none"
            >
              Login
            </button>
          </form>
          <button
            type="submit"
            onClick={handelgoogle}
            className="w-full btn py-2 text-white bg-blue-300 rounded-md hover:bg-blue-400 focus:outline-none felx gap-3 items-center"
          >
            <FaGoogle />
            Google Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-black-500">
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
    </div>
  );
};

export default Login;
