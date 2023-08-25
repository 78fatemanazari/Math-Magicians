import { useEffect, useState } from 'react';

function Quotes() {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
  const [quotes, setQuotes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(`${apiUrl}`, { headers: { 'X-Api-Key': 'GL28fRc56gNA6nYwIY23Zg==Dlp1xolkEvpTcM7i' } });
        setIsLoading(false);
        const quotes = await res.json();
        setQuotes(quotes[0].quote);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Something went wrong!</p>}

      {quotes && (
      <p className="quote">{quotes}</p>
      )}
    </div>
  );
}

export default Quotes;
