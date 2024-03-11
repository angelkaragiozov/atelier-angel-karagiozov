"use client";
import React, { useState } from "react";
import Weather from "./Weather";

const Loader = () => {
  const initialShowComponent = false;
  const [showComponent, setShowComponent] = useState(initialShowComponent);

  const resetState = () => {
    setShowComponent(initialShowComponent);
  };

  const loadMyComponent = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <button onClick={loadMyComponent}>Load Component</button>
        </div>
        <div>
          <button
            className="hover:underline underline-offset-2 decoration-dotted decoration-1 hover:text-dark dark:hover:text-grey"
            onClick={resetState}
          >
            Close
          </button>
        </div>
      </div>
      <div id="dynamic-component-container">{showComponent && <Weather />}</div>
    </div>
  );
};

export default Loader;
