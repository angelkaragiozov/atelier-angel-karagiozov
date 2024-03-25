import React from "react";
import dynamic from "next/dynamic";

const WorksGraph = dynamic(() => import("./WorksGraph"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen border  border-dark dark:border-gray border-dashed">
      <p className="animate-bounce text-xs text-gray dark:text-dark ml-4 mt-4">
        {" "}
        * Loading Visual Graph ...
      </p>
    </div>
  ),
});

const GraphForce = () => {
  return (
    <div>
      <WorksGraph />
    </div>
  );
};

export default GraphForce;
