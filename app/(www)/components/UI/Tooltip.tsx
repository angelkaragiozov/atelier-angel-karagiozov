// Tooltip.tsx
import React from 'react';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
  disabled?: boolean;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, disabled }) => {
  return (
    <div className={`relative z-50 inline-block group ${disabled ? '' : 'group-hover:opacity-100 group-hover:visible'}`}>
      {children}
      <span
        className={`invisible absolute text-neutral dark:text-gray dark:bg-blacks dark:border-dark text-2xs text-nowrap border border-dotted border-gray p-1 mb-2 bottom-full left-1/2 transform -translate-x-1/2 transition-opacity opacity-0 ${
          disabled ? '' : 'group-hover:opacity-100 group-hover:visible'
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
