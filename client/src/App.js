import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Example from "./components/Example/Example";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <Route path="/dashboard" component={Dashboard} />
        </div>
        <Example />
      </div>
    </Router>
  );
}

export default App;
