import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience  from "./components/experience";
import Projects from "./components/projects";
import Contacts from "./components/contact"


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contacts} />
    
      </div>
    </Router>
  );
}

export default App;
