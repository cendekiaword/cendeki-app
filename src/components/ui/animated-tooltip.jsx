"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

export const AnimatedTooltip = ({ items, category }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  <Link
    href={`/${category}/new`}
    className="bg-primary mx-auto w-[80%] rounded-md py-2 text-center text-white"
  >
    + New Story
  </Link>;

  return (
    <>
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={`/${category}/new`}
          className="group relative -mr-4"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -left-1/2 -top-16 z-500 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
            >
              <div className="absolute inset-x-10 -bottom-px z-300 h-px w-[20%]  bg-emerald-500  " />
              <div className="absolute -bottom-px left-10 z-300 h-px w-[40%]  " />
              <div className="relative z-3000 text-4xl font-bold text-primary">
                {item.description}
              </div>
              <div className="text-xs text-primary">TEST_2</div>
            </motion.div>
          )}
          <div className="bg-primary mx-auto w-[80%] rounded-md py-2 text-center text-white">
            XXXXXXXXX
          </div>
        </Link>
      ))}
    </>
  );
};
