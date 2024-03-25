"use client";
import { animatePageIn } from "./utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className=" min-h-screen w-full backdrop-blur-lg z-50 fixed top-0 left-0"
      />
      <div
        id="banner-2"
        className="min-h-screen w-full backdrop-blur-lg z-50 fixed top-0 left-0"
      />
      <div
        id="banner-3"
        className="min-h-screen w-full backdrop-blur-lg z-50 fixed top-0 left-0"
      />

      {children}
    </div>
  );
}
