import React from "react";

const LoadingProjectCard = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="border border-dotted border-gray dark:border-dark w-full p-2 max-w-[520px]">
        <div className="text-xl text-gray/50 dark:text-dark lowercase h-8">
          ------
        </div>
        <div className="w-full bg-gray border border-dotted border-gray dark:border-dark dark:bg-dark/50 aspect-video"></div>
        <div className="h-20 mt-2">
          <p className="animate-bounce text-sm text-gray dark:text-dark">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingProjectCard;
