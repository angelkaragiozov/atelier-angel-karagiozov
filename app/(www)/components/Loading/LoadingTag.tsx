import React from "react";
import { Logo } from "../../utils/Icons";

const LoadingTag = () => {
  return (
    // <div className="mx-4 md:ml-14 md:mr-8">
    <div className="fadein-animation mx-4 md:ml-14 md:mr-8 3xl:mx-auto 3xl:max-w-screen-2xl">
      <div className="w-20 h-20 mx-auto mt-6 mb-4 opacity-50">
        <Logo />
      </div>

      <div className="animate-bounce text-center text-xs text-gray dark:text-dark my-4">
        Loading...
      </div>

      <div className="flex flex-row justify-between w-full -mt-12 lg:-mt-28">
        <pre className="text-2xs">
          {`
   _ _                        
 _| | |_    _____ _____ _____ 
|_     _|  |_   _|  _  |   __|
|_     _|    | | |     |  |  |
  |_|_|      |_| |__|__|_____|
`}
        </pre>
      </div>
      <div className="mt-2 flex flex-col lg:flex-col w-full border-t-[3px] border-neutral border-double pt-4"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <div className="mx-auto md:mx-0 border border-dotted border-gray dark:border-dark w-full p-2 max-w-[520px]">
          <div className="text-xl text-gray dark:text-dark lowercase h-8"></div>
          <div className="w-full aspect-video aspect-ratio-16/9"></div>
          <div className="h-20 mt-2"></div>
        </div>

        <div className="mx-auto md:mx-0 border border-dotted border-gray dark:border-dark w-full p-2 max-w-[520px]">
          <div className="text-xl text-gray dark:text-dark lowercase h-8"></div>
          <div className="w-full aspect-video aspect-ratio-16/9"></div>
          <div className="h-20 mt-2"></div>
        </div>

        <div className="mx-auto md:mx-0 border border-dotted border-gray dark:border-dark w-full p-2 max-w-[520px]">
          <div className="text-xl text-gray dark:text-dark lowercase h-8"></div>
          <div className="w-full aspect-video aspect-ratio-16/9"></div>
          <div className="h-20 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingTag;
