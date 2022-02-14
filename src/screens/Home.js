import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //useEffect runs in every render
    //[] enpty dependency makesit only run on first load
    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
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
    
    return ( 
        <div className="home">
          { error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}

export default Home;

//watch server with npx json-server --watch data/db.json --port 8000