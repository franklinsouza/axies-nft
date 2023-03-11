import { useState, useEffect } from 'react';

const URL_API = 'https://resonant-sudden-periodical.glitch.me';


function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchData () {
      try{
        const response = await fetch(URL_API + endpoint);
        const data = await response.json();
        setData(data);
      } catch (err){
        setError(err);
      }finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [endpoint]);

  return {data, loading, error}
}

export default useFetch;