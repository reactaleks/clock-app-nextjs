'use server'
// Get random programming quote using vercel
export async function fetchProgrammingQuote() {
    const res = await fetch(
      "https://programming-quotesapi.vercel.app/api/random"
    );
    return res.json();
};