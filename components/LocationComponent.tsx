interface PropTypes {
    city: string;
    country: string;
    isExpanded: boolean;
}
export default function LocationComponent({city, country, isExpanded}:PropTypes) {
    return (
        <div className={`uppercase font-bold text-[15px] leading-[28px] tracking-[3px] 
        flex items-center
        ${isExpanded ? 'row-start-12' : 'row-start-19'}
        col-span-6 col-start-2 row-span-1 row-start-19`}>
            In {city}, {country}
        </div>
    )
}