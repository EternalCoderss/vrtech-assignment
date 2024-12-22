import React from "react";
import Cards from "../cards/Cards";
import LocomotiveScroll from "locomotive-scroll";

function Hero() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="h-screen  flex items-center pt-14 justify-center bg-[#17031F]  overflow-auto">
        <div className="w-full h-[90%] flex items-center justify-center   bg-white rounded-t-3xl">
          <div className="hero">

            <h1 className="text-[8.2vw] pt-[1.8vw] text-center font-semibold tracking-tight leading-[1.1] animate-fade-out">
              I am Inter UI app <br />
              nice to meet you
            </h1>
            <div className="h3 text-center pt-4 text-2xl">
              Let users easily access
              <span className="text-[#914CFA]"> all collections</span>
            </div>
            <div className="flex justify-center -space-x-4 mt-8">
              <div className="w-12 h-12 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-700 border-2 border-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-700 border-2 border-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="users flex pl-6 justify-center items-center">
                <p className="uppercase text-sm">3567+ USERs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}export default Hero;
