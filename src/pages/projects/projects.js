import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import ProjectCard from "../../components/Projects-cards/project.cards";
const project = [
  { title: "hello", desc: "project1" },
  { title: "hello2", desc: "project2" },
  { title: "hello3", desc: "project3" },
  { title: "hello", desc: "project1" },
 
  
];

export default class Projects extends Component {
  render() {
    return (<div>
      <div className="cards">
        {project.map((item) => {
          return <ProjectCard data={item} />;
        })}
       
      </div>
      <Footer />
      </div>
    );
  }
}
