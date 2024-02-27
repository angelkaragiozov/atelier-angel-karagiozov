import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Menu from "./Menu";


const Navbar = () => {

  return (
 
    <div className="flex justify-between w-full">

      <Menu />

     <div className="absolute top-px right-px z-30"> <ThemeSwitch/></div>
    </div>

      
  );
};

export default Navbar;
