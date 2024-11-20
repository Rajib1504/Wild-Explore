import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-neutral text-neutral-content p-10">
        <div className="flex flex-wrap sm:gap-6 gap-2 justify-center mx-auto items-center">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100076870941377"
          >
            <FaFacebook className="text-5xl text-blue-400" />
          </a>

          <a target="_blank" href="https://github.com/Rajib1504">
            <IoLogoGithub className="text-5xl text-white" />
          </a>
          <a target="_blank" href="https://www.youtube.com/@Xreeojfdt">
            <FaYoutube className="text-5xl text-red-400" />
          </a>
          <a target="_blank" href="https://x.com/radhanath108">
            <FaTwitter className="text-5xl text-sky-400" />
          </a>
        </div>
        <div className="footer footer-center bg-netural text-base-200 mt-4 p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Wild-Explore
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
