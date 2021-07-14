import React, { Component } from "react";
import "./experience.scss";
export default class ExpereinceCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <div className="container">
        <div className="card">
          <img src="//unsplash.it/399/400" alt="" className="card-img"></img>
          <div className="card-text">
            <h3 className="card-title">{this.props.data.title}</h3>
            <p className=" card-body">{this.props.data.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
