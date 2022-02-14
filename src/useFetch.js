import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //useEffect runs in every render
    //[] enpty dependency makesit only run on first load
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
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
            setError(err.message);
            setIsPending(false);
          })
      }, 1000)
    }, [])

    return {blogs, isPending, error}
}

export default useFetch;