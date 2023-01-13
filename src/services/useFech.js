import { useState, useEffect } from 'react';

const API_URL = 'https://resonant-sudden-periodical.glitch.me';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchData () {
      try{
        const response = await fetch(API_URL + url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err){
        setError(err);
        setLoading(false)
      }
    }

    fetchData();

  }, [url]);

  return {data, loading, error}
}

export default useFetch;