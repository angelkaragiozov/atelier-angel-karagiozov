import Lazy from "./components/Motion/Lazy";
import { MotionDiv } from "./components/Motion/MotionDiv";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Lazy>
        <MotionDiv
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0,
            ease: "linear",
            duration: 0.5,
            type: "spring", // Apply spring physics
            stiffness: 100,
          }}
        >
          {children}
        </MotionDiv>
      </Lazy>
    </>
  );
}
