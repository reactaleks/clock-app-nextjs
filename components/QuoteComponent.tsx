// Get random programming quote using vercel
const fetchProgrammingQuote = async () => {
    const res = await fetch(
      "https://programming-quotesapi.vercel.app/api/random"
    );
    return res.json();
};

export default async function QuoteComponent() {
    let programmingQuote = await fetchProgrammingQuote();
    
    return (
        <div>
            <>{programmingQuote.quote}</>
            <>{programmingQuote.author}</>
            <button>refresh quote</button>
        </div>
    )
}