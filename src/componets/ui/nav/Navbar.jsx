import React, { useEffect, useState } from "react";
import { PRODUCT_CATEGORIES } from '../../const/Config'; // Import categories

const baseMenu = [
  { name: "Home", url: "/" },
  { name: "Pages", url: "/pages" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Shop", url: "/shop" },
  { name: "Blog", url: "/blog" },
  { name: "Products", url: "/products", categories: [] },
];

function Navbar() {
  const [menu, setMenu] = useState(baseMenu);

  useEffect(() => {
    const updatedMenu = menu.map(item => {
      if (item.name === "Products") {
        return { ...item, categories: PRODUCT_CATEGORIES };
      }
      return item;
    });
    setMenu(updatedMenu);
  }, []);

  return (
    <nav className="w-full bg-[#17031F] py-[15px] px-4 fixed z-50 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="menus flex items-center">
            <ul className="flex items-center gap-8">
              {menu.map((item, index) => (
                <li key={index} className="relative group">
                  <a href={item.url} className="text-white font-light hover:text-gray-300 group relative">
                    {item.name}
                    {item.categories && item.categories.length > 0 && (
                      <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  {item.categories && (
                    <ul className="absolute hidden group-hover:block bg-[#17031F] mt-2 py-2 w-48 rounded-md shadow-lg">
                      {item.categories.map((category) => (
                        <li key={category.name}>
                          <a href={category.path} className="block px-4 py-2 text-white hover:bg-[#2a0934]">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="logo flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://becca.qodeinteractive.com/wp-content/uploads/2023/02/h4-logo-light.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center">
            <button className="bg-gradient-to-b from-[#9F45F4] to-[#8E30F3] text-white text-sm font-light px-6 py-3 rounded-md hover:shadow-[0_0_20px_rgba(159,69,244,0.5)] transition-all duration-[0.8s] ease-in-out">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

