import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, title, description, cta, icon, bgColor = "bg-white", img }) {
  return (
    <div
      className={`${width} ${bgColor} rounded-xl -mt-20 p-8 h-[60vh] bg-white flex flex-col justify-between bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }}>
      {/* Upper Content manage kia  */}
      <div>
        {icon ? <div className="mb-5"></div> : <div className="mb-5"></div>}
        <div>
          <h3 className="text-sm  text-white  uppercase tracking-wide">
            {title}
          </h3>
        </div>
      </div>

      {/* Bottom Content: Description and CTA lgaya yaha pe */}
      <div className="space-y-6">
        <h2
          className={`text-3xl font-bold leading-tight ${
            bgColor === "bg-purple-500" ? "text-white" : "text-white"
          }`}>
          {description}
        </h2>
        <button
          className={`flex items-center gap-2 text-base ${
            bgColor === "bg-purple-500" ? "text-white" : "text-purple-600"
          }`}>
          {cta}
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}

export default Card;