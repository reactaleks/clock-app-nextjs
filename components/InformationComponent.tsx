interface PropTypes {
  timezone: string;
  yearday: string;
  weekday: string;
  weeknumber: string;
}
export default function InformationComponent({
  timezone,
  yearday,
  weekday,
  weeknumber,
}: PropTypes) {
  return (
    <>
      <div
        className="col-span-10 col-start-2 row-start-3  uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between 
       md:text-[13px] md:col-span-5 md:col-start-2 md:flex-col md:row-span-2 md:row-start-4 md:tracking-[2.6px]
 xl:col-start-3     "
      >
        <div>Current timezone<span className="md:hidden">:</span></div>
        <div className="text-[15px] md:text-[40px] font-bold capitalize">{timezone}</div>
      </div>
      <div
        className="col-span-10 col-start-2 row-start-5 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between
             md:text-[13px] md:col-span-5 md:col-start-2 md:flex-col md:row-span-2 md:row-start-8 md:tracking-[2.6px]
xl:col-start-3" 
      >
        <div>Day of the year<span className="md:hidden">:</span></div>
        <div className="text-[15px] md:text-[40px] font-bold">{yearday}</div>
      </div>
      <div
        className="col-span-10 col-start-2 row-start-7 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between
            md:text-[13px]  md:col-span-5 md:col-start-8  md:flex-col md:row-span-2 md:row-start-4 md:tracking-[2.6px]
"
      >
        <div>Day of the week<span className="md:hidden">:</span></div>
        <div className="text-[15px] md:text-[40px] font-bold">{weekday}</div>
      </div>
      <div
        className="col-span-10 col-start-2 row-start-9 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between
            md:text-[13px]  md:col-span-5 md:col-start-8 md:flex-col md:row-span-2 md:row-start-8 md:tracking-[2.6px]
"
      >
        <div>Week number<span className="md:hidden">:</span></div>
        <div className="text-[15px] md:text-[40px] font-bold">{weeknumber}</div>
      </div>
    </>
  );
}
