// Get user ip address using ipapi
const fetchUserLocation = async () => {
    const res = await fetch('https://ipapi.co/json/')
    return res.json()
};
// Get user time using worldtimeapi
const fetchUserTime = async (timezone:string) => {
    const res = await fetch(`http://worldtimeapi.org/api/timezone/` + timezone)
    return res.json()
}
// Get random programming quote using vercel
const fetchProgrammingQuote = async () => {
    const res = await fetch('https://programming-quotesapi.vercel.app/api/random')
    return res.json()
}

export default async function ClockComponent() {
    const data = await fetchUserLocation()
    const userTimezone = data.timezone
    const currentUserDateTime = await fetchUserTime(userTimezone)
    const currentUserTime = new Date(currentUserDateTime.datetime).toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: '2-digit' });
    const programmingQuote = await fetchProgrammingQuote()
    
    console.log(data.ip)
  return <>
  <h1>IP:{data.ip}</h1>
  <p>Current time:{currentUserTime}</p>
  <p>`{programmingQuote.quote}`</p>
  <p>Quote by {programmingQuote.author}</p>
  </>;
  
}
