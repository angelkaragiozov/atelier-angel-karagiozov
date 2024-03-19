"use client";

import { motion } from "framer-motion";
import InView from "./InView";

const Line = () => {
  return (
    <div>
      <InView options={{ triggerOnce: true }}>
        {({ ref, inView }) => (
          <motion.div
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
            <div className="border-b-[3px] border-neutral border-double mt-2 mb-4"></div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Line;
