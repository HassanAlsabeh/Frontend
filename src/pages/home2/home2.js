import React, { Component } from "react";
import "./home2.css";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // this.deleteProjects = this.deleteProjects.bind(this)

    this.state = { Projects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5003/project/")
      .then((response) => {
        this.setState({ Projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.Projects &&
            this.state.Projects.map((item, index) => {
              return (
                <div class="container">
                  <div class="card-column column-0">
                    <div class="card card-color-0">
                      <div class="border"></div>
                      <img
                        src={`http://localhost:5003/project/projects/uploads/${item.image}`}
                      />
                      <h1>{item.title}</h1>
                      <div id="cover" class="cover"></div>

                      <div id="open-content" class="open-content">
                        <a href="#" id="close-content" class="close-content">
                          <span class="x-1"></span>
                          <span class="x-2"></span>
                        </a>
                        <img id="open-content-image" src="" />
                        <div class="text" id="open-content-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
