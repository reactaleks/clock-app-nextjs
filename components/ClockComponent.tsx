"use client";
import GreetingComponent from "./GreetingComponent";
import TimeComponent from "./TimeComponent";
import LocationComponent from "./LocationComponent";
import ButtonComponent from "./ButtonComponent";
import QuoteComponent from "./QuoteComponent";
import InformationComponent from "./InformationComponent";
import BackgroundImageComponent from "./BackgroudImageComponent";
import { useState, useEffect, Suspense } from "react";
import { fetchUserTime } from "./Actions/serverActions";
// Get user ip address using ipapi
const fetchUserLocation = async () => {
  const res = await fetch("https://ipapi.co/json/");
  return res.json();
};

export default function ClockComponent() {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('')
  const [userTimeData, setuserTimeData] = useState();
  const [currentTime, setCurrentTime] = useState("");
  const [isExpanded, setIsExpanded] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await fetchUserLocation();
    const userTimeData = await fetchUserTime(data.timezone);
    const currentTime = new Date(userTimeData.datetime).toLocaleTimeString(
      "en-US",
      {
        hour12: false,
        hour: "numeric",
        minute: "2-digit",
      }
    );
    setCity(data.city);
    setCountryCode(data.country_code);
    setuserTimeData(userTimeData);
    setCurrentTime(currentTime);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(city)
  return (
    <>
      <div className="relative ">
        {!isLoading ? (
          <div className="relative text-white bg-black h-screen bg-opacity-50 grid grid-cols-12 grid-rows-24">
            <BackgroundImageComponent currentTime={currentTime} />
            <QuoteComponent />
            <GreetingComponent time={currentTime} />
            <TimeComponent currentTime={currentTime} />
            <LocationComponent city={city} country={countryCode} />
            <ButtonComponent />
          </div>
        ) : null}

        {/* <div className="text-white absolute bottom-0">
        <InformationComponent timezone={currentUserDateTime.timezone} yearday={currentUserDateTime.day_of_year} weekday={currentUserDateTime.day_of_week} weeknumber={currentUserDateTime.week_number}/>

      </div> */}
      </div>
    </>
  );
}
