interface PropTypes {
    city: string;
    country: string;
}
export default function LocationComponent({city, country}:PropTypes) {
    return (
        <>
            In {city}, {country}
        </>
    )
}