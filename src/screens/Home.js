import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("World");
    
    const handleClick = () => {
        setName("Ben")
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Hello {name}!</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
     );
}
 
export default Home;