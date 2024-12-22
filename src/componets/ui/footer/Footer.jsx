import React from "react";

import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="w-full bg-[#17031F]">
        <div className="max-w-screen-xl mt-24 mx-auto py-20 gap-20 flex ">
          <div className="basis-1/4 text-[#F0F0F0]">
            <h1 className="text-[6rem] font-inter font-semibold leading-none tracking-tight">
              billic.
            </h1>
            <p className="mt-10 text-[#F0F0F0] text-sm">
              *Currently available in the U.S. and <br /> Canada
            </p>
          </div>
          <span className="border-[0.2px] opacity-35 border-[#c0a4cc]"></span>
          <div className="basis-[75%]">
            <h2 className="text-3xl flex text-zinc-200 mb-12">
              👋 We would like to be in touch.{" "}
              <FaArrowRight className="text-center top-0 left-0 mt-1 ml-2" />
            </h2>
            <div className="gap-4 flex">
              <div className="basis-1/2">
                <h4 className="mb-5 capitalize text-zinc-200">Discover</h4>
                {[
                  { title: "Contact", url: "#" },
                  { title: "Portfolio", url: "#" },
                  { title: "Blog", url: "#" },
                  { title: "Our Team", url: "#" },
                ].map((item) => (
                  <a
                    href={item.url}
                    className="block mt-3 text-[#c0a4cc] capitalize hover:text-white transition-colors">
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="basis-1/2">
                <h4 className="mb-5 capitalize text-zinc-200">Learn</h4>
                {[
                  { title: "Blog", url: "#" },
                  { title: "Get in Touch", url: "#" },
                  { title: "FAQ", url: "#" },
                  { title: "Latest News", url: "#" },
                ].map((item) => (
                  <a
                    href={item.url}
                    className="block mt-3 text-[#c0a4cc] capitalize hover:text-white transition-colors">
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="basis-1/2">
                <h4 className="mb-5 capitalize text-zinc-200">Products</h4>
                {[
                  { title: "Shop", url: "#" },
                  { title: "Pricing", url: "#" },
                  { title: "Blog", url: "#" },
                  { title: "Landing", url: "#" },
                ].map((item) => (
                  <a
                    href={item.url}
                    className="block mt-3 text-[#c0a4cc] capitalize hover:text-white transition-colors">
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="basis-1/2">
                <h4 className="mb-5 capitalize text-zinc-200">Company</h4>
                {[
                  { title: "About us", url: "#" },
                  { title: "Contact", url: "#" },
                  { title: "Reviews", url: "#" },
                  { title: "Services", url: "#" },
                ].map((item) => (
                  <a
                    href={item.url}
                    className="block mt-3 text-[#c0a4cc] capitalize hover:text-white transition-colors">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* privacy policy section  */}
      <div className="w-full bg-[#17031F] ">
        <div className="max-w-screen-xl mx-auto border-t-[01.2px] border-[#c0a4cc] border-opacity-40 py-2 pt-8  gap-10 flex  items-start ml-auto ">
          {[
            { title: "Privacy Policy", url: "#" },
            { title: "Terms of Service", url: "#" },
            { title: "Cookie Policy", url: "#" },
            { title: "impressum", url: "#" },
            { title: "Terms", url: "#" },
          ].map((item) => (
            <a
              href={item.url}
              className="text-[#c0a4cc] flex items-start capitalize mb-3 hover:text-white transition-colors">
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
export default Footer;
