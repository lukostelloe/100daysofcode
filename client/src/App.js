import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import HunDays from "./components/HunDays/HunDays";
import Shop from "./components/Shop/Shop";
import MusicMood from "./components/Musicmood/Musicmood";
import Exercises from "./components/Exercises/Exercises";
import Cv from "./components/Cv/Cv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hundays" component={HunDays} />
          <Route path="/shop" component={Shop} />
          <Route path="/musicmood" component={MusicMood} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/cv" component={Cv} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
