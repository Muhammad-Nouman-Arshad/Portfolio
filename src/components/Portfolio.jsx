import React from "react";

import html from "../../public/Html.png";
import css from "../../public/Css.png";
import javascript from "../../public/JavaScript.png";
import reactjs from "../../public/React.png";
import figma from "../../public/Figma.png";
import github from "../../public/GitHub.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "React Js",
    },
    {
      id: 5,
      logo: figma,
      name: "Figma",
    },
    {
      id: 6,
      logo: github,
      name: "GitHub",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14"
    >
      <div>
        <h1 className="text-3xl font-bold mb-3">PortFolio</h1>
        <span className="text-xl font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 gap-y-8 my-5 justify-center">

          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[240px] md:h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center bg-white"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>


              <div className=" px-6 py-4 flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-25 py-1 rounded">
                  Source code
                </button>
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;