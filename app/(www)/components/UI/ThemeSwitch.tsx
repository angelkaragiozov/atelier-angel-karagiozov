"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Theme } from "../../utils/Icons";
import Tooltip from "./Tooltip";

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
      <button
        className="w-5 h-5 border border-neutral border-dotted bg-light/50 hover:bg-white dark:bg-black/50 dark:hover:bg-blacks hover:border-solid transition-all ease-in-out duration-1000"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Tooltip text="light">
            <Theme />
          </Tooltip>
        ) : (
          <Tooltip text="dark">
            <Theme />
          </Tooltip>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
