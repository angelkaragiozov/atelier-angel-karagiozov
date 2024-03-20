"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface PlayInViewProps {
  children: ReactNode;
}

const PlayInViewMobile = ({ children }: PlayInViewProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again when it comes back in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0.2,
        y: 0,
        // scale: 0.9, // Initial scale for elastic effect
      }}
      animate={{
        opacity: inView ? 1 : 0.2,
        y: inView ? 0 : 10,
        // scale: inView ? 1 : 0.9, // Return to normal scale
      }}
      transition={{
        duration: 1,
        ease: "linear",
        // type: "spring", // Apply spring physics
        // stiffness: 200, // Adjust stiffness as needed
      }}
    >
      {children}
    </motion.div>
  );
};

export default PlayInViewMobile;
