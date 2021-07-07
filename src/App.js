import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Experience } from "./components/Pages/Experience";
import { Projects } from "./components/Pages/Projects";
import { Contact } from "./components/Pages/Contact";

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
