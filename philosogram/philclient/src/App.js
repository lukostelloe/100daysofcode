import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";
import Random from "./components/Random/Random";
import Philpage from "./components/Philpage/Philpage";
import Read from "./components/Read/Read";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch className="switch">
          <Route path="/login" component={Login} />
          <Route path="/feed" component={Feed} />
          <Route path="/random" component={Random} />
          <Route path="/philpage" component={Philpage} />
          <Route path="/read" component={Read} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
