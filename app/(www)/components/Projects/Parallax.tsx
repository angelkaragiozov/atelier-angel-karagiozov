"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WindowSize {
  width?: number;
  height?: number;
}

export function Parallax({
  className,
  children,
  speed = 2,
  id = "parallax",
}: {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  id?: string;
}) {
  const trigger = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  const { width: windowWidth } = useWindowSize() as WindowSize;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = (windowWidth || 0) * speed * 0.1; // Use 0 if windowWidth is undefined

    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
