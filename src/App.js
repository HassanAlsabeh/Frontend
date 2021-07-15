import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Home2 from "./pages/home2/home2";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Projects from "./pages/projects/projects";
import Mailer from "./pages/contact/contact";
import AboutUpdate from "./components/about.crud";
import ProjectAdd from "./components/project.add";
import ProjectUpdate from "./components/project.update";
import Projectdelete from "./components/project.delete";
import Login from "../src/pages/login/login";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home2} />
      <Route path="/about" exact component={About} />
      <Route path="/update/about" exact component={AboutUpdate} />
      <Route path="/project/add" exact component={ProjectAdd} />
      <Route path="/project/update" exact component={ProjectUpdate} />
      <Route path="/project/delete" exact component={Projectdelete} />
      <Route path="/experience" exact component={Experience} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Mailer} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}

export default App;
