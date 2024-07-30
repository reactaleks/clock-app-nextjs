
interface PropTypes {
    currentTime: string;
    abbreviation: string;
    isExpanded: boolean;
}
export default function TimeComponent({currentTime, abbreviation, isExpanded}: PropTypes) {
    return (
        <div className={`text-[100px] font-bold leading-[100px] tracking-[-2.5px] 
        flex items-end
        ${isExpanded ? 'row-start-12 row-span-5' : 'row-start-14 row-span-4'}
         col-span-10  col-start-2`}>
            <>{currentTime}</>
            <div className="text-[15px] leading-[28px] tracking-[0px] font-light">{abbreviation}</div>
        </div>
    )
}