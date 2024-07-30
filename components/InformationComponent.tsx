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
      <div className="col-span-10 col-start-2 row-start-3 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between">
        <div>Current timezone:</div>
        <div className="text-[15px] font-bold">{timezone}</div>
      </div>
      <div className="col-span-10 col-start-2 row-start-5 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between">
        <div>Day of the year:</div>
        <div className="text-[15px] font-bold">{yearday}</div>
      </div>
      <div className="col-span-10 col-start-2 row-start-7 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between">
        <div>Day of the week:</div>
        <div className="text-[15px] font-bold">{weekday}</div>
      </div>
      <div className="col-span-10 col-start-2 row-start-9 uppercase text-[10px] leading-[28px] tracking-[2px] flex justify-between">
        <div>Week number:</div>
        <div className="text-[15px] font-bold">{weeknumber}</div>
      </div>
    </>
  );
}
