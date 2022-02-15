import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./screens/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/create"><Create /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
