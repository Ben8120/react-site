import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    //useEffect runs in every render
    //[] enpty dependency makesit only run on first load
    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
          })
      }, 1000)
    }, [])
    
    return ( 
        <div className="home">
          {isPending && <div>loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}

export default Home;

//watch server with npx json-server --watch data/db.json --port 8000