interface PropTypes {
  time: string;
}

export default function GreetingComponent({ time }: PropTypes) {
  const currentHour = parseInt(time.split(':')[0])
  let greeting = "";


  if (currentHour > 5 && currentHour < 12) {
    greeting = "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }


  return (
    <div className="text-white">
        {currentHour >= 5 && currentHour < 17 ? 'moon' : 'sun'} 
      Good {greeting}
    </div>
  );
}
