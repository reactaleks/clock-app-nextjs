"use client";
import { SetStateAction, useState } from "react";
import { animate, motion } from "framer-motion";

interface PropTypes {
  isExpanded: boolean;
  setIsExpanded: (isExpanded:boolean) => void;
}

export default function ButtonComponent({setIsExpanded, isExpanded}:PropTypes) {
  const [isActive, setisActive] = useState(false);

  const variants = {
    rotate: { rotate: [0, -180], type: "spring" },
    rotateback: { rotate: [-180, 0], type: "spring" },

  };

  return (
    <button
    
      onClick={() => {
        setisActive(!isActive)
        setIsExpanded(!isExpanded)
      }}
      className="
        text-black text-opacity-50 text-[12px] md:text-[16px] font-bold leading-[14px] tracking-[3.75px] uppercase
        rounded-full bg-white
        col-span-4 col-start-2 row-span-2 row-start-22 
        relative
        flex items-center justify-start p-5 md:px-7
        max-h-[39px] max-w-[115px]
        md:max-w-[146px] md:max-h-[56px]
        "
    >
      {isExpanded ? 'Less' : 'More'}
      <motion.div
        variants={variants}
        animate={isActive ? "rotate" : "rotateback"}
        className="bg-[#303030] w-[32px] md:w-[40px] md:h-[40px] h-[32px] flex items-center top-0 bottom-0 my-auto right-1 md:right-2 rounded-full justify-center absolute"
      >
        <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFF" strokeWidth="2" d="m1 1 6 6 6-6" />
        </svg>
      </motion.div>
    </button>
  );
}
