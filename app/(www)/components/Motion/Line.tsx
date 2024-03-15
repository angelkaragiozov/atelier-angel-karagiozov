"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Line = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again when it comes back in view
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{
          // opacity: 0.3,
          //   scale: 0.9,
          width: 0, // Initial scale for elastic effect
        }}
        animate={{
          // opacity: 1,
          //   scale: 1, // Return to normal scale
          width: inView ? "100%" : "0%",
        }}
        transition={{
          delay: 0.2,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="border-b-[3px] border-neutral border-double mt-2 mb-4"></div>
      </motion.div>
    </div>
  );
};

export default Line;
