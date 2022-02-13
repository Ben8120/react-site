import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    //useEffect runs in every render
    //[] enpty dependency makesit only run on first load
    useEffect(() => {
      console.log('use effect ran');
    }, [])
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}

export default Home;

//watch server with npx json-server --watch data/db.json --port 8000