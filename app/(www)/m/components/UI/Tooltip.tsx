// Tooltip.tsx
import React from "react";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
  disabled?: boolean;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, disabled }) => {
  return (
    <div
      className={`relative inline-block text-nowrap group ${disabled ? "" : "group-hover:opacity-1 group-hover:visible"}`}
    >
      {children}
      <span
        className={`invisible absolute bg-white dark:bg-blacks text-xs text-neutral text-2xs  inline-block text-nowrap border border-dotted border-dark dark:border-gray py-1 px-2 mb-2 bottom-full left-1/2 transform -translate-x-1/2 transition-opacity opacity-0 ${
          disabled ? "" : "group-hover:opacity-100 group-hover:visible"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
