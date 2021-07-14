import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import "./project.scss";
// import ProjectCard from "../../components/Projects-cards/project.cards";
// const project = [
//   { title: "hello", desc: "project1" },
//   { title: "hello2", desc: "project2" },
//   { title: "hello3", desc: "project3" },
//   { title: "hello", desc: "project1" },

// ];

export default class Projects extends Component {
  constructor(props) {
    super(props);

    // this.deleteProjects = this.deleteProjects.bind(this)

    this.state = { Projects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/project/")
      .then((response) => {
        this.setState({ Projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // deleteProjects(id) {
  //     axios.delete('http://localhost:5007/create/'+id)
  //       .then(response => { console.log(response.data)});

  //     this.setState({
  //       Projects: this.state.Projects.filter(el => el._id !== id)
  //     })
  //   }

  render() {
    return (
      <div>
        <Navbar />
        <div className="cards">
          {this.state.Projects &&
            this.state.Projects.map((item, index) => {
              return (
                <div class="container5" key={item._id}>
                  <div className="card">
                    <img
                      src={"//unsplash.it/399/400"}
                      alt=""
                      className="card-img"
                    ></img>
                    <div className="card-text">
                      <h3 className="card-title">{item.title}</h3>
                      <p className=" card-body">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Footer />
      </div>
    );
  }
}
