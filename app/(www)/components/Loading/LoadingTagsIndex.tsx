import React from "react";
import { Logo } from "../../utils/Icons";

const LoadingTagsIndex = () => {
  return (
    <div>
      <div className="w-20 h-20 mx-auto mt-6 mb-4">
        <Logo />
      </div>
      <div className="animate-bounce text-xs text-gray dark:text-dark ml-4 mt-4 text-center">
        Loading ...
      </div>

      <div className="flex flex-row justify-between w-full mt-0 lg:-mt-20">
        <pre className="text-2xs">
          {`
 _____ _____ _____ _____ 
|_   _|  _  |   __|   __|
  | | |     |  |  |__   |
  |_| |__|__|_____|_____|
`}
        </pre>
      </div>

      <div className="mt-2 w-full border-t-[3px] border-neutral border-double pt-4"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-dotted border-neutral h-10"></div>
        <div className="border border-dotted border-neutral h-10"></div>
        <div className="border border-dotted border-neutral h-10"></div>

        <div className="border border-dotted border-neutral/70 h-10"></div>
        <div className="border border-dotted border-neutral/70 h-10"></div>
        <div className="border border-dotted border-neutral/70 h-10"></div>

        <div className="border border-dotted border-neutral/30 h-10"></div>
        <div className="border border-dotted border-neutral/30 h-10"></div>
        <div className="border border-dotted border-neutral/30 h-10"></div>
      </div>
    </div>
  );
};

export default LoadingTagsIndex;
