"use client";
import { motion, Variants } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";

interface MotionProps {
  children: ReactNode;
}

const LoadMotion: React.FC<MotionProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const variants: Variants = isMobile
    ? {
        initial: {
          opacity: 0.2,
          y: 0,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }
    : {
        initial: { opacity: 0.2, y: 0 },
        animate: { opacity: 1, y: 10 },
      };

  return (
    <motion.div initial="initial" animate="animate" variants={variants}>
      {children}
    </motion.div>
  );
};

export default LoadMotion;
