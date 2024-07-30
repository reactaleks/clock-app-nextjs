"use client";
import { fetchProgrammingQuote } from "./Actions/serverActions";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
interface PropTypes {
  isExpanded: boolean;
}

export default function QuoteComponent({ isExpanded }: PropTypes) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const quoteData = await fetchProgrammingQuote();
    setLoading(false);
    return setData(quoteData);
  };

  useEffect(() => {
    getData();
  }, []);

  const variants = {
    rotate: { rotate: [0, -360], type: "spring" },
  };
  return (
    <div
      className={`${
        isExpanded ? "hidden" : "relative"
      } text-[12px] leading-[22px]
        col-span-10 col-start-2 row-span-8 row-start-2
        md:col-span-9 md:col-start-2 md:row-span-8 md:row-start-2 
        flex justify-between
        `}
    >
      <div
        className="flex flex-col max-w-[90%]
      text-[12px] md:text-[18px] leading-[22px] tracking-[0px]
      "
      >
        <div className="font-normal">
          &quot;{loading ? " " : data!.quote}&quot;
        </div>
        <div className="font-bold mt-2">{loading ? " " : data!.author}</div>
      </div>

      <button className="cursor-pointer flex" onClick={getData}>
        <motion.div
          variants={variants}
          animate={loading ? "rotate" : ""}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
              fill="#FFF"
              fillRule="nonzero"
              opacity=".5"
            />
          </svg>
        </motion.div>
      </button>
    </div>
  );
}
