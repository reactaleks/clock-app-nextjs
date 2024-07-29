"use client";

export default function ButtonComponent() {
  return (
    <button
      className="
        text-black text-opacity-50 text-[12px] font-bold leading-[14px] tracking-[3.75px] uppercase
        rounded-full bg-white
        col-span-4 col-start-2 row-span-1 row-start-11 
        relative
        flex items-center justify-start p-4
        max-h-[39px] max-w-[115px]
        "
    >
      More
      <div className="bg-[#303030] w-[32px] h-[32px] flex items-center top-0 bottom-0 my-auto right-1 rounded-full justify-center absolute">
        <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFF" strokeWidth="2"  d="m1 1 6 6 6-6" />
        </svg>
      </div>
    </button>
  );
}
