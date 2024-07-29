interface PropTypes {
    city: string;
    country: string;
}
export default function LocationComponent({city, country}:PropTypes) {
    return (
        <div className="uppercase font-bold text-[15px] leading-[28px] tracking-[3px] 
        flex items-center
        col-span-6 col-start-2 row-span-1 row-start-10 ">
            In {city}, {country}
        </div>
    )
}