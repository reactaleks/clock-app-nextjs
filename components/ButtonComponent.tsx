"use client";
import { useState } from "react";
import { animate, motion } from "framer-motion";

export default function ButtonComponent() {
  const [isActive, setisActive] = useState(false);

  const variants = {
    rotate: { rotate: [0, -180], type: "spring" },
    rotateback: { rotate: [-180, 0], type: "spring" },

    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  };

  return (
    <button
      onClick={() => {
        setisActive(!isActive);
      }}
      className="
        text-black text-opacity-50 text-[12px] font-bold leading-[14px] tracking-[3.75px] uppercase
        rounded-full bg-white
        col-span-4 col-start-2 row-span-2 row-start-22 
        relative
        flex items-center justify-start p-4
        max-h-[39px] max-w-[115px]
        "
    >
      More
      <motion.div
        layout
        variants={variants}
        animate={isActive ? "rotate" : "rotateback"}
        className="bg-[#303030] w-[32px] h-[32px] flex items-center top-0 bottom-0 my-auto right-1 rounded-full justify-center absolute"
      >
        <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFF" strokeWidth="2" d="m1 1 6 6 6-6" />
        </svg>
      </motion.div>
    </button>
  );
}
