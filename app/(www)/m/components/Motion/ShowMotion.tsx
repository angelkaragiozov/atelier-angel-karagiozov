import Lazy from "./Lazy";
import { MotionDiv } from "./MotionDiv";

const ShowMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <Lazy>
      <MotionDiv
        initial={{
          opacity: 0.2,
          // scale: 0.9, // Initial scale for elastic effect
        }}
        animate={{
          opacity: 1,
          // scale: 1, // Return to normal scale
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "linear",
          // type: "spring", // Apply spring physics
          // stiffness: 300, // Adjust stiffness as needed
        }}
      >
        {children}
      </MotionDiv>
    </Lazy>
  );
};

export default ShowMotion;
