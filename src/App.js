import Navbar from "./components/Navbar";

function App() {
  const title = "Welcome to Ben's React Blogs!";
  const likes = 50;
  const person = { name: 'Ben', age: 22 }; 
  const link = "https://www.google.com";

  return (
    <div>
    <Navbar />
      <h1>{title}</h1>
      <p>Liked {likes} times</p>

      <a href={ link }>Google Site</a>
    </div>
  );
}

export default App;
