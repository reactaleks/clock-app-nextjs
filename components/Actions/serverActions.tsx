'use server'
// Get random programming quote using vercel
export async function fetchProgrammingQuote() {
    const res = await fetch(
      "https://programming-quotesapi.vercel.app/api/random"
    );
    return res.json();
};

// Get user time using worldtimeapi
export async function fetchUserTime(timezone: string) {
  const res = await fetch((`http://worldtimeapi.org/api/timezone/` + timezone));
  return res.json();
};