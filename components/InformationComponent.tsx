interface PropTypes {
    timezone:string;
    yearday:string;
    weekday:string;
    weeknumber:string;
}
export default function InformationComponent({timezone,yearday,weekday,weeknumber}:PropTypes) {
    return (
        <div className="bottom-0 bg-black">
            <div>Current timezone: {timezone}</div>
            <div>Day of the year: {yearday}</div>
            <div>Day of the week: {weekday}</div>
            <div>Week number: {weeknumber}</div>
        </div>
    )
}