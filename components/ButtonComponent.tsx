"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface PropTypes {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export default function ButtonComponent({
  setIsExpanded,
  isExpanded,
}: PropTypes) {
  const [isActive, setisActive] = useState(false);

  const variants = {
    rotate: { rotate: [-180] },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setisActive(!isActive);
        setIsExpanded(!isExpanded);
      }}
      className={`
        text-black text-opacity-50 text-[12px] md:text-[16px] font-bold leading-[14px] tracking-[3.75px] uppercase
        rounded-full bg-white shadow-2xl
        col-span-4 col-start-2 row-span-2 row-start-22
        relative
        group
        flex items-center justify-start p-5 md:px-7
        w-[115px] h-[39px] md:w-[146px] md:h-[56px] ${
          isExpanded
            ? "row-start-20 md:row-start-21 xl:row-start-19 xl:row-span-3 xl:col-start-10"
            : "xl:col-start-10 xl:row-span-2 xl:row-start-22"
        }
        `}
    >
      {isExpanded ? "Less" : "More"}
      <motion.div
        variants={variants}
        animate={isActive ? "rotate" : ""}
        style={{x:0}}
        className="bg-[#303030] group-hover:bg-[#999999] w-[32px] md:w-[40px] md:h-[40px] h-[32px] flex items-center top-0 bottom-0 my-auto right-1 md:right-2 rounded-full justify-center absolute"
      >
        <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFF" strokeWidth="2" d="m1 1 6 6 6-6" />
        </svg>
      </motion.div>
    </motion.button>
  );
}
