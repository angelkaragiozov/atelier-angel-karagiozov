"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const WorksGraph = dynamic(() => import("./WorksGraph"), {
  ssr: false,
  loading: () => (
    <div className="w-full  border border-gray border-dashed dark:border-dark">
      <p className="animate-bounce text-xs text-gray dark:text-dark ml-4 mt-4">
        {" "}
        * Loading Visual Graph ...
      </p>
    </div>
  ),
});

const Loader = () => {
  const [showComponent, setShowComponent] = useState(false);

  const loadMyComponent = () => {
    setShowComponent(true);
  };

  return (
    <div className="h-full">
      {!showComponent ? (
        <>
          <div>
            <div onClick={loadMyComponent} className="cursor-pointer">
              <div className="flex flex-col border text-base border-neutral border-dotted hover:border-solid hover:bg-white dark:hover:bg-blacks w-full transition-all ease-in-out duration-1000">
                <div className="p-4 flex flex-col lg:flex-row items-center justify-center gap-4 ">
                  <div className="leading-tight text-2xs py-2">
                    <pre>
                      {`_    _ _____ _______ _     _ _______ _     
 \\  /    |   |______ |     | |_____| |     
  \\/   __|__ ______| |_____| |     | |_____`}
                    </pre>
                  </div>

                  <div className="leading-tight text-2xs">
                    <pre>
                      {` ______  ______ _______  _____  _     _
|  ____ |_____/ |_____| |_____] |_____|
|_____| |    \\_ |     | |       |     |`}
                    </pre>
                  </div>
                </div>
                <span className="text-xs text-center mb-4 ">
                  <p className="localfont text-base">*</p>
                  Enter a graph visualization of all projects
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen cursor-move">
          <WorksGraph />
        </div>
      )}
    </div>
  );
};

export default Loader;
