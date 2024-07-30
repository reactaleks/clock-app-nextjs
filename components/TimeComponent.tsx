interface PropTypes {
  currentTime: string;
  abbreviation: string;
  isExpanded: boolean;
}
export default function TimeComponent({
  currentTime,
  abbreviation,
  isExpanded,
}: PropTypes) {
  return (
    <div
      className={`text-[75px] md:text-[175px] items-center xl:text-[180px] xl:leading-[200px] xl:tracking-[-5px] font-bold leading-[100px] tracking-[-2.5px] 
        flex xl:col-start-3
        ${
          isExpanded
            ? "row-start-11 row-span-3 md:row-start-8 md:row-span-6 xl:row-start-10 xl:row-span-8"
            : "row-start-16 row-span-2 md:row-start-15 xl:row-start-17 xl:row-span-4"
        }
         col-span-8
         col-start-2 md:row-span-3  justify-between xl:justify-start`}
    >
      <>{currentTime}</>
      <div className="text-[15px] md:text-[32px] leading-[28px] tracking-[0px] font-light h-full flex items-end">
        {abbreviation}
      </div>
    </div>
  );
}
