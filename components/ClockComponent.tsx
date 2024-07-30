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


interface TimeData {
  abbreviation:string;
  client_ip:string;
  datetime:string;
  day_of_week:number;
  day_of_year:number;
  dst:boolean;
  dst_from:string;
  dst_offset:number;
  dst_until:string;
  raw_offset:number;
  timezone:string;
  unixtime:number;
  utc_datetime:string;
  utc_offset:string;
  week_number:number;
}

// Get user ip address using ipapi
const fetchUserLocation = async () => {
  const res = await fetch("https://ipapi.co/json/");
  return res.json();
};

export default function ClockComponent() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [userTimeData, setuserTimeData] = useState<TimeData | any>("");
  const [currentTime, setCurrentTime] = useState("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDayTime, setIsDayTime] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await fetchUserLocation();
    const userTimeData = await fetchUserTime(data.timezone) as TimeData;
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
    if (
      parseInt(currentTime.split(":")[0]) >= 5 &&
      parseInt(currentTime.split(":")[0]) < 17
    ) {
      setIsDayTime(!isDayTime);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="relative ">
        {!isLoading ? (
          <motion.div
            initial={isExpanded ? { height: "60vh" } : ''}
            animate={!isExpanded ? { height: "100vh" } : ''}
            transition={{ ease: "easeIn", duration: 0.1 }}
            className={`relative text-white ${
              isExpanded ? "h-[60vh] xl:h-[50vh]" : "h-screen"
            } bg-black   bg-opacity-50 grid grid-cols-12 grid-rows-24`}
          >
            <BackgroundImageComponent isDayTime={isDayTime}/>
            <QuoteComponent isExpanded={isExpanded} />
            <GreetingComponent time={currentTime} isExpanded={isExpanded} />
            <TimeComponent
              currentTime={currentTime}
              abbreviation={userTimeData!.abbreviation}
              isExpanded={isExpanded}
            />
            <LocationComponent
              city={city}
              country={countryCode}
              isExpanded={isExpanded}
            />
            <ButtonComponent
              setIsExpanded={setIsExpanded}
              isExpanded={isExpanded}
            />
          </motion.div>
        ) : null}

        <motion.div
          initial={isExpanded ? { height: '40vh' } : ''}
          animate={!isExpanded ? { height: 0 } : ''}
          transition={{ ease: "easeIn", duration: 0.1 }}
          className={` ${isExpanded ? "h-[40vh] xl:h-[50vh]" : "h-[0px]"} ${
            isDayTime ? "bg-[#979797] text-black" : "bg-black text-white "
          }  bg-opacity-[80%] backdrop-blur-md grid grid-cols-12 grid-rows-12`}
        >
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
