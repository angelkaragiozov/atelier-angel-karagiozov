import React from 'react';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <span className="invisible absolute  text-neutral text-2xs text-nowrap bg-white border border-dotted border-gray  dark:text-gray dark:bg-blacks dark:border-dark  p-1  right-0 top-8 transform  transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
