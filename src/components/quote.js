import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'pcHVbve4kt/P+l6KlFNqxQ==Xw2mdj25huSLt5YI',
          },
        });
        if (response) {
          const data = await response.json();
          setQuote(data[0].quote);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <p>{quote}</p>;
}
