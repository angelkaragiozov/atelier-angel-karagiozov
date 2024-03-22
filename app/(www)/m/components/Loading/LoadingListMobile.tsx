import React from "react";

const LoadingListMobile = () => {
  return (
    <div>
      {/* <MotionDiv
        initial={{
          scale: 0.9,
          opacity: 0.5,
        }}
      > */}
      <div className="flex flex-col p-2 pt-0 border border-dotted border-gray dark:border-dark mx-auto h-[88px]">
        <h2 className="text-sm  text-gray dark:text-dark pt-[2px] fadein-animation">
          ------
        </h2>
        <div className="flex flex-row justify-between fadein-animation">
          <div className="w-[100px] h-[56px] bg-gray dark:bg-dark"></div>
          <div>
            <p className="text-2xs text-gray dark:text-dark col-span-2 animate-bounce mr-4">
              Loading...
            </p>
          </div>
        </div>
      </div>
      {/* </MotionDiv> */}
    </div>
  );
};

export default LoadingListMobile;
