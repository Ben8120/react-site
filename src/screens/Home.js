import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    //useEffect runs in every render
    //[] enpty dependency makesit only run on first load
    useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
    }, [])
    
    return ( 
        <div className="home">
          {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
     );
}

export default Home;

//watch server with npx json-server --watch data/db.json --port 8000