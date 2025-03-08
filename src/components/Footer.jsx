import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <ul className="flex gap-3">
              <li>
                  <a href="https://youtube.com/@nomiii013?si=NHDMcQy2MKIMT0xb" target="_blank">
                    <IoLogoYoutube className="text-2xl cursor-pointer md:text-2xl hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61550866733973" target="_blank">
                    <FaSquareFacebook className="text-2xl cursor-pointer md:text-2xl hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/muhammad_nouman_arshad_013/" target="_blank">
                    <FaInstagram className="text-2xl cursor-pointer md:text-2xl hover:scale-110 duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/muhammad-nouman-arshad-b51373337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer md:text-2xl hover:scale-110 duration-200" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 border-t border-gray-700 pt-5 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ nomiiibest</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;