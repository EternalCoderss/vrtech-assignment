import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Carsols() {
  return (
    <div className="w-full">
      <div className="container flex  max-w-screen-xl mx-auto h-screen mt-32  border-t-2 rounded-3xl   bg-[#17031F]">
        <div className="justify-center mt-20 items-center basis-1/2">
          <h3 className="text-white  p-10 ml-5  text-4xl">
            A platform to do the best <br /> of your work.
          </h3>
          <button
            className="flex items-center p-5 ml-10 gap-2 text-base "
            style={{ color: "#fff" }}>
            {" "}
            Start using Becca w/ WordPress
            <span className="text-xl">
              <FaArrowRight className="text-white" />
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-5 ml-10 ">
            <img
              className="w-44 h-44 -mt-20"
              src="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/h4-slider-2-img-3.png"
              alt=""
            />
            <img
              className="w-64 h-72 ml-4 pt-4"
              src="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/h4-slider-2-img-2.png"
              alt=""
            />
            <img
              className="w-44 h-44 ml-0 -mt-20"
              src="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/h4-slider-2-img-1.png"
              alt=""
            />
          </div>
        </div>

        {/* right side conainer block yaha se shuru */}
        <div className="basis-1/2 flex">
          <div className="basis-1/3">
            <h4 className="mb-5 capitalize text-4xl text-center mt-20 text-white">
              24/7
            </h4>
            <span className="block w-28 border-[0.2px] border-opacity-60 border-[#c0a4cc] mx-auto mt-4"></span>
            <h3 className="text-white text-sm text-center uppercase mt-3">
              support
            </h3>
          </div>
          <div className="basis-1/3">
            <h4 className="mb-5 capitalize text-4xl text-center mt-20 text-white">
              77+
            </h4>
            <span className="block w-28 border-[0.2px] border-opacity-60 border-[#c0a4cc] mx-auto mt-4"></span>
          <h3 className="text-white text-sm text-center uppercase mt-3">
            users
          </h3>
          </div>
          <div className="basis-1/3">
            <h4 className="mb-5 capitalize text-4xl text-center mt-20 text-white">
              345+
            </h4>
            <span className="block w-28 border-[0.2px] border-opacity-60 border-[#c0a4cc] mx-auto mt-4"></span>
            <h3 className="text-white text-sm text-center uppercase mt-3">
              projects
            </h3>
          </div>

          <div className="basis-1/2">
            <div className="bg-[#2a0934] w-[50px] h-[40px] flex justify-center items-center">   
            </div>
          </div>
          {/* right side conainer block inner box */}
        </div>
      </div>
    </div>
  );
}
export default Carsols;
