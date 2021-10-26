import "./App.css";
// import Navbar from "./components/Navbar/Navbar";

import HunDays from "./components/HunDays/HunDays";
import MusicMood from "./components/Musicmood/Musicmood";
import Contact from "./components/Contact/Contact";
import Cv from "./components/Cv/Cv";
import Homepage from "./components/Homepage/Homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Homepage />
        <Switch>
          <Route path="/hundays" component={HunDays} />
          <Route path="/musicmood" component={MusicMood} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/cv" component={Cv} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
