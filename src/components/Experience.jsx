import React from "react";

import html from "../../public/Html.png";
import css from "../../public/Css.png";
import javascript from "../../public/JavaScript.png";
import react from "../../public/React.png";
import figma from "../../public/Figma.png";
import github from "../../public/GitHub.png";
import ms_office from "../../public/GitHub.png";
function Experiance() {
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
      logo: react,
      name: "React",
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
    {
      id: 7,
      logo: github,
      name: "MS Office",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="bg-white flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;