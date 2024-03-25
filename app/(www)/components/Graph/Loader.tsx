"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const WorksGraph = dynamic(() => import("./WorksGraph"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-16 border border-gray border-dotted dark:border-dark">
      <p className="animate-bounce text-xs text-center text-neutral mt-7">
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
              <div className="flex flex-col border text-base  border-dark dark:border-gray border-dotted hover:border-solid hover:bg-white dark:hover:bg-blacks w-full transition-all ease-in-out duration-1000">
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

                <p className="text-center localfont text-base">*</p>
                <p className="text-center text-sm mb-4">
                  Enter a graph visualization of all projects
                </p>
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
          <div className="text-xs text-justify text-neutral  border-dark dark:border-gray border-dotted dark:text-dark ">
            <div className="border  border-dark dark:border-gray border-dotted hover:border-solid hover:text-dark dark:hover:text-gray hover:bg-white dark:hover:bg-blacks p-2 my-4 transition-all ease-in-out duration-1000">
              <h3 className="text-sm mb-2  border-b  border-dark dark:border-gray border-dotted">
                Mouse
              </h3>
              <p>
                Nodes Interaction -- Click: Visit the project associated with
                the node. Click + Hold + Drag: Adjust the position of the node.
              </p>
              <p>
                Navigation Controls -- Click the background + Drag: Rotate the
                view. Mouse-Wheel / Middle-Click: Zoom in or out. Right-Click:
                Pan the graph.
              </p>
            </div>
            <div className="border  border-dark dark:border-gray border-dotted hover:border-solid hover:text-dark dark:hover:text-gray hover:bg-white dark:hover:bg-blacks p-2 my-4 transition-all ease-in-out duration-1000">
              <h3 className="text-sm mb-2 border-b  border-dark dark:border-gray border-dotted">
                Touch
              </h3>
              <p>
                Node Interaction -- Tap: Visit the project associated with the
                node. Tap + Hold + Drag: Adjust the position of the node.
              </p>
              <p>
                Navigation Controls -- Swipe: Rotate the view. Pinch Gesture:
                Zoom in or out. Two Fingers: Pan the graph.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
