"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        nav
          ? "fixed left-0 bottom-0 backdrop-blur-lg w-full h-screen"
          : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 bottom-0 w-[100%] h-dvh bg-light dark:bg-black p-10 ease-in-out duration-500"
            : "fixed left-0 bottom-[-100%] w-[100%]  h-dvh bg-light/50 dark:bg-black/50 ease-out duration-500"
        }
      >
        <div onClick={handleNav}>
          <h1 className="text-dark dark:text-gray">CLOSE</h1>
        </div>

        <div className="mt-10">
          <Link onClick={handleNav} href="/">

              
          </Link>
        </div>

        <div
          onClick={handleNav}
          className="absolute left-0 bottom-full mt-auto w-full h-14 border-t border-gray border-dashed dark:border-dark bg-light dark:bg-black"
        >
          <div className={nav ? "ease-in duration-500" : ""}>
            <div className="text-base mt-3 text-blue dark:text-yellow">
              <div className="flex items-center pl-2 justify-center">
                   <div className="w-1/3 flex items-center pl-2 justify-center">-</div>
                   <div className="w-1/3 flex items-center pl-2 justify-center">-</div>
                   <div className="w-1/3 flex items-center pl-2 justify-center">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
