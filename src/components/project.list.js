import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./project_list.css";
import Dashboard from "../pages/dashboard/dashboard";

const Projects = (props) => (
  <tr>
    <td>{props.projects.title}</td>
    <td>{props.projects.description}</td>
    <td>{props.projects.button}</td>
    <td>{props.projects.image}</td>

    <td>
      <Link to={`/project/update/${props.projects._id}`}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteProject(props.projects._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);

    this.state = { Project: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/project/")
      .then((response) => {
        this.setState({ Project: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProject(id) {
    axios
      .delete("http://localhost:5003/project/delete/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      Project: this.state.Project.filter((el) => el._id !== id),
    });
  }

  projectList() {
    return this.state.Project.map((currentprojects) => {
      return (
        <Projects
          projects={currentprojects}
          deleteProject={this.deleteProject}
          key={currentprojects._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Dashboard />
        <div className="table_projects">
          <table>
            <caption>Projects List</caption>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">button</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>{this.projectList()}</tbody>
          </table>
          <br></br>
          <br></br>
          <button
            id="contact-submit"
            data-submit="...Sending"
            style={{ backgroundColor: "lightblue" }}
          >
            <Link to={"/project/add/"}>ADD NEW PROJECT</Link>
          </button>

          {/* <div>
        <h3>Logged project</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{this.projectList()}</tbody>
        </table><br></br><br></br>
        </div><Link to={"/project/add/"} style={{color:"red"}}>ADD NEW PROJECT</Link>      */}
        </div>
      </div>
    );
  }
}
