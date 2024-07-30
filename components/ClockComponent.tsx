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
import { motion } from "framer-motion";
// Get user ip address using ipapi
const fetchUserLocation = async () => {
  const res = await fetch("https://ipapi.co/json/");
  return res.json();
};

export default function ClockComponent() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [userTimeData, setuserTimeData] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
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



  console.log(userTimeData);
  return (
    <>
      <div className="relative ">
        {!isLoading ? (
          <div
            
            className={`relative text-white ${
              isExpanded ? "h-[65vh]" : "h-screen"
            } bg-black  h-screen bg-opacity-50 grid grid-cols-12 grid-rows-24`}
          >
            <BackgroundImageComponent currentTime={currentTime} />
            <QuoteComponent isExpanded={isExpanded}/>
            <GreetingComponent time={currentTime} isExpanded={isExpanded}/>
            <TimeComponent currentTime={currentTime} abbreviation={userTimeData!.abbreviation} isExpanded={isExpanded}/>
            <LocationComponent city={city} country={countryCode} isExpanded={isExpanded}/>
            <ButtonComponent
              setIsExpanded={setIsExpanded}
              isExpanded={isExpanded}
            />
          </div>
        ) : null}

        <motion.div 
         className={`text-white ${isExpanded ? "h-[35vh]" : "h-0"} bg-black bg-opacity-90 grid grid-cols-12 grid-rows-12`}>
          <InformationComponent
            timezone={userTimeData!.timezone}
            yearday={userTimeData!.day_of_year}
            weekday={userTimeData!.day_of_week}
            weeknumber={userTimeData!.week_number}
          />
        </motion.div>
      </div>
    </>
  );
}
