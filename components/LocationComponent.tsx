interface PropTypes {
  city: string;
  country: string;
  isExpanded: boolean;
}
export default function LocationComponent({
  city,
  country,
  isExpanded,
}: PropTypes) {
  return (
    <div
      className={`uppercase font-bold text-[15px] md:text-[18px] xl:text-[24px] leading-[28px] tracking-[3px] md:tracking-[3.6px] xl:tracking-[4.8px]
        flex items-center justify-start xl:col-start-3
        ${
          isExpanded
            ? "row-start-15 md:row-start-15  xl:row-start-20"
            : "row-start-18 md:row-start-19 xl:row-start-22"
        }
        col-span-6 col-start-2 row-span-2 md:row-span-1
        
        `}
    >
      In {city}, {country}
    </div>
  );
}
