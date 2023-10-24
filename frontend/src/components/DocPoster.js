import React from "react";
import docHome from "../assets/doctorHome.png";

function DocPoster(props) {
  const title1 = props.title1;
  const title2 = props.title2;

  return (
    <div className=" mt-12 ">
      {/* doc Image */}
      <div className=" flex justify-evenly">
        <div className="text-white text-4xl bg-teal-600 rounded-3xl  h-[408px] w-[700px]  z-10  relative left-28 ">
          <h1 className="mt-28 font-semibold tracking-wider">{title1}<br/>{title2}</h1>
        </div>
        <div>
          <img className="relative  right-20" src={docHome} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default DocPoster;
