"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import React from "react";

const Lazy = ({ children }: { children: React.ReactElement }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default Lazy;
