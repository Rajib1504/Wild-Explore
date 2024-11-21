import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-36 p-2 z-[9999] shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              {user && (
                <li>
                  <Link to={"/updateProfile"}>Update Profile</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to={"/myprofile"}>My Profile</Link>
                </li>
              )}
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
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {user && (
              <li>
                <Link to={"/updateProfile"}>Update Profile</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to={"/myprofile"}>My Profile</Link>
              </li>
            )}
          </ul>
        </div>
        {/* tool tip  */}
        <div className=" mx-2 flex gap-2 items-center">
          {user && user?.email ? (
            <div
              className="tooltip tooltip-bottom z-10"
              data-tip={user?.displayName}
            >
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Profile Picture" src={user?.photoURL} />
                </div>
              </div>
            </div>
          ) : (
            <img src="https://i.ibb.co/5kvRVMX/user.png" alt="" />
          )}
          {/* log in  */}
          {user && user?.email ? (
            <button onClick={logOut} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
