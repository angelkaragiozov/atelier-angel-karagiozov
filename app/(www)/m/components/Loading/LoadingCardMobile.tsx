import React from "react";

const LoadingCardMobile = () => {
  return (
    <div className="mx-auto md:mx-0 border border-dotted border-gray dark:border-dark w-full p-2 max-w-[520px]">
      <div className="text-xl text-gray/50 dark:text-dark lowercase h-8">
        ------
      </div>
      <div className="w-full bg-gray border border-dotted border-gray dark:border-dark dark:bg-dark/50 aspect-video aspect-ratio-16/9"></div>
      <div className="h-20 mt-2">
        <p className="animate-bounce text-sm text-gray dark:text-dark">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingCardMobile;
