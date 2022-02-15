import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const abortCont = new AbortController();

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //useEffect runs in every render
    //[] enpty dependency makesit only run on first load
    useEffect(() => {
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) {
              throw Error('could not fetch data for that resource')
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(false);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              setError(err.message);
              setIsPending(false);  
            }
          })
      }, 250);
      
      return () => abortCont.abort();
    }, [])

    return {blogs, isPending, error}
}

export default useFetch;