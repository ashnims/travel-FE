import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Packges from './Component/Pages/Packges';
import Services from './Component/Pages/Services';
import Signup from "./Component/Pages/Signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services"  component={Services}/>
        <Route path="/about"  component={About}/>
        <Route path="/packges" component={Packges}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
