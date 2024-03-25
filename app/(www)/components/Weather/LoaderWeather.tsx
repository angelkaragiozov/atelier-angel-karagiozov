"use client";
import React, { useState } from "react";
import Weather from "./Weather";

const Loader = () => {
  const initialShowComponent = false;
  const [showComponent, setShowComponent] = useState(initialShowComponent);

  const toggleState = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <div
        className="flex flex-col md:flex-row cursor-pointer gap-4"
        onClick={toggleState}
      >
        <div>
          <pre>
            {`| _ _|_' _  _|_ _ ||   
|(/_ |  _\\   | (_|||<  `}
          </pre>
        </div>
        <div>
          <pre>
            {` _ |_  _   _|_  _|_|_  _ 
(_||_)(_)|_||    | | |(/_`}
          </pre>
        </div>
        <div>
          <pre>
            {`\\    / _  _ _|_|_  _  _
 \\/\\/ (/_(_| | | |(/_|`}
          </pre>
        </div>
      </div>

      <div className="cursor-pointer float-right mt-4" onClick={toggleState}>
        {showComponent ? "Close" : "check the weather somewhere"}
      </div>

      <div id="dynamic-component-container">{showComponent && <Weather />}</div>
    </div>
  );
};

export default Loader;
