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
      .get("http://localhost:5003/about/")
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
              <div className="container2">
                <div className="data">
                  <div className="title" key={item._id}>
                  
                    <h1>{item.certificate}</h1><br></br>
                    <h3>{item.certificatedesc}</h3><br></br>
                    <h1>{item.profile}</h1><br></br>
                    <h3>{item.profiledesc}</h3><br></br>
                    <h1>{item.languages}</h1><br></br>
                    <h3>{item.languagesdesc}</h3><br></br>
                    <h1>{item.programs}</h1><br></br>
                    <h3>{item.programsdesc}</h3><br></br>
                  </div>
                  <div className="button1 ">
                    <a href='../components/pdf/Hassan.resume.pdf' download>Resume</a>
                    </div>
                </div>
                <div className="personal_img">
                  <img src={`http://localhost:5003/about/about/uploads/${item.image}`} />
                  
                </div>
              </div>
            );
          })}
        <Footer />
      </div>
    );
  }
}
