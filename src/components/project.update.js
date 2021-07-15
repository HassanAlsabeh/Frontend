import React, { Component } from "react";

import axios from "axios";

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




  async componentDidMount() {
    await axios
      .get("http://localhost:5003/project/")
      .then((response) => {
        this.setState({ Projects: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateProjects = (id)=> {
      console.log()
      axios.put(`http://localhost:5003/project/update/${id}`)
        .then(response => { console.log(response.data)});
    }

  render() {
    return (
      <div>
        
        <div className="cards">
          {this.state.Projects &&
            this.state.Projects.map((item, index) => {
              return (
                <div class="container5" style={{margin:"20px"}} key={item._id}>
                Title <br></br><input type="text" value={item.title} name="title"/><br></br>
                Description <input type="text" value={item.description} name="description"/>
                <img
                      src={`http://localhost:5003/project/uploads/${item.image}`}
                      alt=""
                      height="200px"
                      className="card-img"
                    ></img>
                      <label>Upload image</label>
            <input
              type="file"
              name="image"
             
              />
                <br></br> <br></br> <button type="submit" style={{marginLeft:'40%'}} onClick={(()=>this.updateProjects(item._id))}>update</button>
                </div>
              );
            })}
        </div>
       
      </div>
    );
  }
}
