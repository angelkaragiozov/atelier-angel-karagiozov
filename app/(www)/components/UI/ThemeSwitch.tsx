"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Theme } from "../../utils/Icons";
import TooltipBasic from "./TooltipBasic";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
    <TooltipBasic text={"Toogle Theme"}>
    <button
      className="w-5 h-5 mt-1 mr-1.5 border border-gray border-dotted bg-light/50 hover:bg-white dark:border-dark dark:bg-black/50 dark:hover:bg-blacks hover:border-solid transition-all ease-in-out duration-1000"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Theme />  : <Theme />}
    </button>
    </TooltipBasic>
    </div>
  );
};

export default ThemeSwitch;
