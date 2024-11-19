import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="navbar bg-[#f0f7fad7] p-0 justify-between items-center">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Update profile</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-1 font-bold  items-center">
            <img
              className="w-20 hidden sm:block"
              src="https://i.ibb.co/5xZDc1k/fotor-2024111812459-removebg-preview.png"
              alt=""
            />
            <h2 className="text-xl sm-text-2xl">Wild Explore</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:border-2 lg:rounded-full">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About</a>
            </li>
            <li>
              <a>Update Profile</a>
            </li>
          </ul>
        </div>
        <div className=" mx-2 flex gap-2 items-center">
          <div className="tooltip  tooltip-left" data-tip="hello">
            <img
              src="https://i.ibb.co/68pYjTF/user-removebg-preview.png"
              alt=""
            />
          </div>

          <Link to="/auth/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
