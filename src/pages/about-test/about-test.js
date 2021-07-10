import React, { Component } from "react";
import "./about-test.css";
export default class Home extends Component {
  render() {
    return (
      <div>
            <section class="about-section">
  <div class="container-fluid p-0">
    <div class="row no-gutters position-relative">
      <div class="left-header d-none d-lg-block col-lg-3 col-xl-4">
        <div class="v-center-box d-flex align-items-end text-uppercase">
          <h2 class="mb-0">About Me</h2>
        </div>
      </div>
      <div class="col-lg-9 col-xl-8">
        <div class="main-content p-5">
          <div class="main-header mb-4">
            <h6 class="sub-heading text-uppercase d-block mb-2">Who I am</h6>
            <h1 class="main-heading d-inline-block text-uppercase pb-3 border-bottom">&lt; About &gt;</h1>
          </div>

          <div class="row mb-5">
            <div class="mb-5 mb-sm-4 col-md-4">
              <img src="https://source.unsplash.com/35sVnCCynWA/784x1250" alt="Colorful Wall"/>
            </div>
            <div class="col-md-8">
              <div class="about__text mb-5 mb-sm-4 mb-md-4">
                <h3>I'm Rodrigues</h3>
                <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla
                  rerum doloribus qui, neque placeat veniam est deserunt eum aperiam quia, ab
                  fuga sed? Commodi laboriosam nulla hic amet sint.</p>
              </div>
              <div class="about__skills">
                <div class="row no-gutters mb-0 mb-sm-4">
                  <div class="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                    <div class="media">
                      <i class="fab fa-js-square icon-18 mr-3"></i>
                      <div class="media-body">
                        <h4 class="m-0">Javascript</h4>
                        <p class="m-0">Quasea minus animi sequi sit nostrum? Lorem ipsum
                          dolor sit amet
                          consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                    <div class="media">
                      <i class="fab fa-react icon-18 mr-3"></i>
                      <div class="media-body">
                        <h4 class="m-0">React</h4>
                        <p class="m-0">Ducimus facere vitae sapiente ab sit. Lorem ipsum
                          dolor sit amet
                          consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row no-gutters mb-0 mb-sm-4">
                  <div class="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                    <div class="media">
                      <i class="fab fa-sass icon-18 mr-2"></i>
                      <div class="media-body">
                        <h4 class="m-0">Sass</h4>
                        <p class="m-0">Eaque voluptatibus dolores. Quod. Lorem dolor sit
                          amet
                          consectetur. Minus, asperiores.</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-0 pl-sm-3 col-sm-6">
                    <div class="media">
                      <i class="fab fa-node-js icon-18 mr-3"></i>
                      <div class="media-body">
                        <h4 class="m-0">Node.js</h4>
                        <p class="m-0">Numquam saepe deserunt obcaecati? Doloribus. Lorem
                          ipsum dolor
                          sit amet adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="about-data">
            <div class="row no-gutters pt-5 border-top">
              <div class="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="fas fa-mug-hot icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">10,950</p>
                    <p class="m-0 text-uppercase">Cups of coffee</p>
                  </div>
                </div>
              </div>

              <div class="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="fas fa-code icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">8,475,000</p>
                    <p class="m-0 text-uppercase">Lines of code</p>
                  </div>
                </div>
              </div>

              <div class="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="fas fa-bus icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">8,214</p>
                    <p class="m-0 text-uppercase">Buses taken</p>
                  </div>
                </div>
              </div>

              <div class="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="far fa-smile-wink icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">3,165</p>
                    <p class="m-0 text-uppercase">Awkward winks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    );
  }
}
