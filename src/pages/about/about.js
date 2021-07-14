import React, { Component } from "react";
import axios from "axios";
import "./about.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
export default class Contacts extends Component {
  constructor(props) {
    super(props);

    // this.deleteAbout = this.deleteAbout.bind(this)

    this.state = { About: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/about/")
      .then((response) => {
        this.setState({ About: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // deleteAbout(id) {
  //     axios.delete('http://localhost:5007/create/'+id)
  //       .then(response => { console.log(response.data)});

  //     this.setState({
  //       About: this.state.About.filter(el => el._id !== id)
  //     })
  //   }

  render() {
    return (
      <div>
        <Navbar />
        {/* <h1>{this.state.About && this.state.About[0] && this.state.About[1].title}</h1> */}

        {this.state.About &&
          this.state.About.map((item, index) => {
            return (
              <div className="container1">
                <div className="data">
                  <div className="title" key={item._id}>
                  
                    <h1>{item.title1}</h1>
                    <h3>{item.description1}</h3>
                    <h1>{item.title2}</h1>
                    <h3>{item.description2}</h3>
                    <h1>{item.title3}</h1>
                    <h3>{item.description3}</h3>
                    <h1>{item.title4}</h1>
                    <h3>{item.description4}</h3>
                  </div>
                  <div className="button1 ">
                    <a href='../components/pdf/Hassan.resume.pdf' download>Resume</a>
                    </div>
                </div>
                <div className="personal_img">
                  <img src="https://dreambuilders.dk/wp-content/uploads/2015/03/myAvatar-1.png" />
                  
                </div>
              </div>
            );
          })}
        <Footer />
      </div>
    );
  }
}
