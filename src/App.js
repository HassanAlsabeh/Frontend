import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Projects from "./pages/projects/projects";
import Mailer from "./pages/contact/contact";
import AboutUpdate from "./components/about.crud";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/update/about" exact component={AboutUpdate} />
      <Route path="/experience" exact component={Experience} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Mailer} />
    </Router>
  );
}

export default App;
