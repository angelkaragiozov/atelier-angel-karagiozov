"use client";

import InView from "./InView";
import Lazy from "./Lazy";
import { MotionDiv } from "./MotionDiv";

const Line = () => {
  return (
    <div>
      <InView options={{ triggerOnce: true }}>
        {({ ref, inView }) => (
          <Lazy>
            <MotionDiv
              ref={ref}
              initial={{
                width: 0,
              }}
              animate={{
                width: inView ? "100%" : "0%",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <div className="border-b-[3px] border-dark dark:border-gray border-double mt-2 mb-4"></div>
            </MotionDiv>
          </Lazy>
        )}
      </InView>
    </div>
  );
};

export default Line;
