import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Experience  from "./pages/experience/experience";
import Projects from "./pages/projects/projects";
import Contacts from "./pages/contact/contact";
import AboutUpdate from "./components/about.crud";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/update/about" exact component={AboutUpdate} />
        <Route path="/experience"exact component={Experience} />
        <Route path="/projects"exact component={Projects} />
        <Route path="/contact" exact component={Contacts} />
    
      </div>
    </Router>
  );
}

export default App;
