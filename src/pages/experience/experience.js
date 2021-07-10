import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import ExpereinceCard from "../../components/Expereinces-cards/expereince.cards";
import Footer from "../../components/footer/footer";
const project = [
  { title: "hello", desc: "project1" },
  { title: "hello2", desc: "project2" },
  { title: "hello3", desc: "project3" },
  { title: "hello", desc: "project1" },
];

export default class Expereinces extends Component {
  render() {
    return (
      <div>
         <Navbar />
      <div className="cards">
        
        {project.map((item) => {
          return <ExpereinceCard data={item} />;
        })}
      </div>
      <Footer />
      </div>
    );
  }
}
