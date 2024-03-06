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
                <div className="bg-[url('/visual--graph.svg')] h-52 p-4 bg-no-repeat bg-center flex flex-col lg:flex-row items-center justify-center gap-10 ">
                  <div className="leading-tight text-2xs">
                    <pre>
                      {`
 _____ _ _____ _____ _____ __    
|  |  |_|   __|  |  |  _  |  |   
|  |  | |__   |  |  |     |  |__ 
 \\___/|_|_____|_____|__|__|_____|
`}
                    </pre>
                  </div>

                  <div className="leading-tight text-2xs">
                    <pre>
                      {`
 _____ _____ _____ _____ _____ 
|   __| __  |  _  |  _  |  |  |
|  |  |    -|     |   __|     |
|_____|__|__|__|__|__|  |__|__|
`}
                    </pre>
                  </div>
                </div>
                <p className="text-xs h-10 pt-3 text-center border-t border-dotted border-gray dark:border-dark">
                  Enter a graph visualization of all projects
                </p>
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
