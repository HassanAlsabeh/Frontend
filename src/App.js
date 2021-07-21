import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Experience } from "./Pages/Experience";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        
        <div className="pages">
          <Switch>
            
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
