import React, { Component } from "react";
import axios from "axios";
export default class About extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle1 = this.onChangeTitle1.bind(this);
    this.onChangeDescription1 = this.onChangeDescription1.bind(this);
    this.state = {
      title1: "",
      description1: "",
    };
    this.onChangeTitle2 = this.onChangeTitle2.bind(this);
    this.onChangeDescription2 = this.onChangeDescription2.bind(this);
    this.state = {
      title2: "",
      description2: "",
    };
    this.onChangeTitle3 = this.onChangeTitle3.bind(this);
    this.onChangeDescription3 = this.onChangeDescription3.bind(this);
    this.state = {
      title3: "",
      description3: "",
    };
    this.onChangeTitle4 = this.onChangeTitle4.bind(this);
    this.onChangeDescription4 = this.onChangeDescription4.bind(this);
    this.state = {
      title4: "",
      description4: "",
    };
  }

  componentDidMount() {
    this.setState({
      title1: "",
      description1: "",
      title2: "",
      description2: "",
      title3: "",
      description3: "",
      title4: "",
      description4: "",
    });
  }

  onChangeTitle1(e) {
    this.setState({
      title1: e.target.value,
    });
  }

  onChangeDescription1(e) {
    this.setState({
      description1: e.target.value,
    });
  }

  onChangeTitle2(e) {
    this.setState({
      title2: e.target.value,
    });
  }

  onChangeDescription2(e) {
    this.setState({
      description2: e.target.value,
    });
  }
  onChangeTitle3(e) {
    this.setState({
      title3: e.target.value,
    });
  }

  onChangeDescription3(e) {
    this.setState({
      description3: e.target.value,
    });
  }

  onChangeTitle4(e) {
    this.setState({
      title4: e.target.value,
    });
  }

  onChangeDescription4(e) {
    this.setState({
      description4: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      title1: this.state.title1,
      description1: this.state.description1,
      title2: this.state.title2,
      description2: this.state.description2,
      title3: this.state.title3,
      description3: this.state.description3,
      title4: this.state.title4,
      description4: this.state.description4,
    };

    console.log(exercise);
    axios
      .put(
        "http://localhost:5001/update/about/60e5c7a90b839b7dd9ecc70f",
        exercise
      )
      .then((res) => console.log(res.data));
    // window.location =
  };

  render() {
    return (
      <div>
        <h3>Creat new data</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Certificate</label>
            <input
              type="text"
              required
              value={this.state.title1}
              onChange={this.onChangeTitle1}
            />
          </div>
          <div>
            <label>Text</label>
            <input
              type="text"
              required
              value={this.state.description1}
              onChange={this.onChangeDescription1}
            />
          </div>
          <div>
            <label>Profile</label>
            <input
              type="text"
              required
              value={this.state.title2}
              onChange={this.onChangeTitle2}
            />
          </div>
          <div>
            <label>Text</label>
            <input
              type="text"
              required
              value={this.state.description2}
              onChange={this.onChangeDescription2}
            />
          </div>
          <div>
            <label>Languages</label>
            <input
              type="text"
              required
              value={this.state.title3}
              onChange={this.onChangeTitle3}
            />
          </div>
          <div>
            <label>Text</label>
            <input
              type="text"
              required
              value={this.state.description3}
              onChange={this.onChangeDescription3}
            />
          </div>
          <div>
            <label>Programs</label>
            <input
              type="text"
              required
              value={this.state.title4}
              onChange={this.onChangeTitle4}
            />
          </div>
          <div>
            <label>Text</label>
            <input
              type="text"
              required
              value={this.state.description4}
              onChange={this.onChangeDescription4}
            />
          </div>
          <div>
            <input type="submit" value="Create About data" />
          </div>
        </form>
      </div>
    );
  }
}
