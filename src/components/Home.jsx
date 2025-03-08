import React from "react";

import pic from "../../public/meeee.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-22"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-2xl font-bold">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </p>
            <br />

            {/* social media icons */}
            <div className="flex flex-col items-end justify-between md:flex-row space-y-6 md:space-y-0">

              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex gap-3">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>


              <div className=" flex flex-col justify-end">
                <h1 className="font-bold text-center pb-2">Currently working on</h1>
                <div className="flex gap-3">
                  <FaHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaCss3 className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <IoLogoJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaFigma className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaGithub className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>


            </div>

          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[330px] md:h-[330px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;