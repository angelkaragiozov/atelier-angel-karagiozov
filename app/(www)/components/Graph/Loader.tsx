"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const WorksGraph = dynamic(() => import("./WorksGraph"), {
  ssr: false,
  loading: () => (
    <div className="w-full  border border-gray border-dashed dark:border-dark">
      <p className="animate-bounce text-xs text-neutral ml-4 mt-4">
        Loading Visual Graph ...
      </p>
    </div>
  ),
});

const Loader = () => {
  const initialShowComponent = false;
  const [showComponent, setShowComponent] = useState(initialShowComponent);

  const resetState = () => {
    setShowComponent(initialShowComponent);
  };

  const loadMyComponent = () => {
    setShowComponent(true);
  };

  const refreshComponent = () => {
    setShowComponent(false); // Hide the component
    setTimeout(() => {
      setShowComponent(true); // Show it again after a brief delay
    }, 0); // Adjust the delay as needed
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
        <div>
          <div className="flex flex-row justify-between items-center text-sm mb-1">
            <button
              className="hover:underline underline-offset-2 decoration-dotted decoration-1 hover:text-dark dark:hover:text-grey"
              onClick={refreshComponent}
            >
              Reset View
            </button>
            <button
              className="hover:underline underline-offset-2 decoration-dotted decoration-1 hover:text-dark dark:hover:text-grey"
              onClick={resetState}
            >
              Close
            </button>
          </div>
          <div className="cursor-move">
            <WorksGraph />
          </div>
          <div className="text-xs text-justify text-neutral border-neutral border-dotted dark:text-dark ">
            <div className="border border-neutral border-dotted hover:border-solid hover:text-dark dark:hover:text-gray hover:bg-white dark:hover:bg-blacks p-2 my-4 transition-all ease-in-out duration-1000">
              <h3 className="text-sm mb-2  border-b border-neutral border-dotted">
                Mouse
              </h3>
              <p>
                Nodes: click to visit project, click+hold+drag is for
                positioning Navigation: click+drag to rotate, mouse-wheel /
                middle-click to zoom in or out, right-click: pan Nodes: click to
                visit project, click+hold+drag is for positioning Navigation:
                click+drag to rotate, mouse-wheel / middle-click to zoom in or
                out, right-click: pan
              </p>
            </div>
            <div className="border border-neutral border-dotted hover:border-solid hover:text-dark dark:hover:text-gray hover:bg-white dark:hover:bg-blacks p-2 my-4 transition-all ease-in-out duration-1000">
              <h3 className="text-sm mb-2 border-b border-neutral border-dotted">
                Touch
              </h3>
              <p>
                Nodes: click to visit project, click+hold+drag is for
                positioning Navigation: click+drag to rotate, mouse-wheel /
                middle-click to zoom in or out, right-click: pan Nodes: click to
                visit project, click+hold+drag is for positioning Navigation:
                click+drag to rotate, mouse-wheel / middle-click to zoom in or
                out, right-click: pan
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
