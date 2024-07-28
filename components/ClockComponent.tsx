import GreetingComponent from "./GreetingComponent";
import TimeComponent from "./TimeComponent";
import LocationComponent from "./LocationComponent";
import ButtonComponent from "./ButtonComponent";
import QuoteComponent from "./QuoteComponent";
import InformationComponent from "./InformationComponent";

// Get user ip address using ipapi
const fetchUserLocation = async () => {
  const res = await fetch("https://ipapi.co/json/");
  return res.json();
};
// Get user time using worldtimeapi
const fetchUserTime = async (timezone: string) => {
  const res = await fetch(`http://worldtimeapi.org/api/timezone/` + timezone);
  return res.json();
};


export default async function ClockComponent() {
  const data = await fetchUserLocation();
  const userTimezone = data.timezone;
  const currentUserDateTime = await fetchUserTime(userTimezone);
  const currentUserTime = new Date(
    currentUserDateTime.datetime
  ).toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <>
        <QuoteComponent/>
        <GreetingComponent time={currentUserTime}/>
        <TimeComponent currentTime={currentUserTime}/>
        <LocationComponent city={data.city} country={data.country_code}/>
        <ButtonComponent/>
        <InformationComponent timezone={currentUserDateTime.timezone} yearday={currentUserDateTime.day_of_year} weekday={currentUserDateTime.day_of_week} weeknumber={currentUserDateTime.week_number}/>

    </>
  );
}
