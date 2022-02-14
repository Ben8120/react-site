import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../useFetch";

const Home = () => {

    const {blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
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