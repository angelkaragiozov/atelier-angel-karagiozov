import React from "react";

const Grid = () => {
  return (
    <div>
      <div className="flex flex-col border-4 border-dotted border-yellow dark:border-dark w-ful h-full mt-4">
        <div className="flex flex-row justify-between border border-blue">
          <div className="h-1/3 w-1/4 border border-dotted border-neutral">
            01
          </div>
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            01
          </div>
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            01
          </div>
        </div>

        <div className="flex flex-row justify-between border border-blue">
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            01
          </div>
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            01
          </div>
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            09
          </div>
        </div>

        <div className="flex flex-row justify-between border border-blue">
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            01
          </div>
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            01
          </div>
          <div className="h-1/4 w-1/4 border border-dotted border-neutral">
            09
          </div>
        </div>
      </div>

      <pre className="font-pixel text-xl">
        {`                    
+-+-+-+-+
       
`}
      </pre>
    </div>
  );
};

export default Grid;
