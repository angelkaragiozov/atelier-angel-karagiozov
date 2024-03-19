"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface PlayInViewProps {
  children: ReactNode;
}

const PlayInView = ({ children }: PlayInViewProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again when it comes back in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        y: 0,
      }}
      animate={{
        y: inView ? 0 : 20,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
        type: "spring", // Apply spring physics
        stiffness: 300, // Adjust stiffness as needed
      }}
    >
      {children}
    </motion.div>
  );
};

export default PlayInView;
