"use client";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import { MotionDiv } from "./MotionDiv";
import Lazy from "./Lazy";

interface PlayInViewProps {
  children: ReactNode;
}

const PlayInView = ({ children }: PlayInViewProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again when it comes back in view
  });

  return (
    <Lazy>
      <MotionDiv
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
          stiffness: 200, // Adjust stiffness as needed
        }}
      >
        {children}
      </MotionDiv>
    </Lazy>
  );
};

export default PlayInView;
