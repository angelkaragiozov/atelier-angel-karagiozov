import { LazyMotion, domAnimation, m } from "framer-motion";

export const MyComponent = ({ isVisible }: { isVisible: boolean }) => (
  <LazyMotion features={domAnimation}>
    <m.div animate={{ opacity: isVisible ? 1 : 0 }} />
  </LazyMotion>
);

export const MotionDiv = MyComponent;
