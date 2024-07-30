interface PropTypes {
    city: string;
    country: string;
    isExpanded: boolean;
}
export default function LocationComponent({city, country, isExpanded}:PropTypes) {
    return (
        <div className={`uppercase font-bold text-[15px] md:text-[18px] leading-[28px] tracking-[3px] md:tracking-[3.6px]
        flex items-center
        ${isExpanded ? 'row-start-12 md:row-start-17' : 'row-start-19 md:row-start-20'}
        col-span-6 col-start-2 row-span-1 row-start-19
        
        `}>
            In {city}, {country}
        </div>
    )
}