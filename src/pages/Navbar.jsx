import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent  p-0 justify-between items-center">
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
          <img
            className="w-20"
            src="https://i.ibb.co/b3KfnJr/fotor-2024111812459.png"
            alt=""
          />
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
        <div className=" mx-2">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
