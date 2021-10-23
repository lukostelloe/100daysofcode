import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HunDays from "./components/HunDays/HunDays";
import Shop from "./components/Shop/Shop";
import MusicMood from "./components/Musicmood/Musicmood";
import Contact from "./components/Contact/Contact";
import Cv from "./components/Cv/Cv";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/hundays" component={HunDays} />
          <Route path="/shop" component={Shop} />
          <Route path="/musicmood" component={MusicMood} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Cv} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
