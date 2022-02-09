import Navbar from "./components/Navbar";

import Home from "./screens/Home";

function App() {
  const title = "Welcome to Ben's React Blogs!";
  const likes = 50;
  const person = { name: 'Ben', age: 22 }; 
  const link = "https://www.google.com";

  return (
    <div>
    <Navbar />
      <Home />

      <a href={ link }>Google Site</a>
    </div>
  );
}

export default App;
