import React, { Component } from "react";
import axios from "axios";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.state = {
      title: "",
      description: "",
    };
  }
  componentDidMount() {
    this.setState({
      title: "",
      description: "",
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      title: this.state.title,
      description: this.state.description,
    };

    console.log(exercise);
    axios
      .post("http://localhost:5002/project/add", exercise)
      .then((res) => console.log(res.data));
    // window.location =
  };
  render() {
    return (
      <div>
        <h3>Creat new Project</h3>
        <form
          onSubmit={this.onSubmit}
       
        >
          <div>
            <label>Title</label>
            <input
              type="text"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
            <div>
            <label>Upload image</label>
            <input
              type="file"
              name="image"
              />
            </div>
            <div>
              <input type="submit" value="Create New Project" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
