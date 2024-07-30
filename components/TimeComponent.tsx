
interface PropTypes {
    currentTime: string;
    abbreviation: string;
    isExpanded: boolean;
}
export default function TimeComponent({currentTime, abbreviation, isExpanded}: PropTypes) {
    return (
        <div className={`text-[100px] md:text-[175px] xl:text-[200px] xl:leading-[200px] xl:tracking-[-5px] font-bold leading-[100px] tracking-[-2.5px] 
        flex items-end
        ${isExpanded ? 'row-start-12 row-span-5 md:row-start-11 xl:row-start-10' : 'row-start-15 row-span-4 md:row-start-16 xl:row-start-17'}
         col-span-10 col-start-2 md:row-span-4 items-center`}>
            <>{currentTime}</>
            <div className="text-[15px] md:text-[32px] leading-[28px] tracking-[0px] font-light">{abbreviation}</div>
        </div>
    )
}