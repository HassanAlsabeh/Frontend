import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./dashboard.css";
export default class Dashboard extends Component {
  Logout = () => {
    localStorage.removeItem("login");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container_about_dash">
        <div class="area"></div>
        {localStorage.getItem("login", true) ? (
          <nav class="main-menu">
            <ul>
              <li>
                <a href="/dashboard">
                  <i class="fa fa-home fa-2x"></i>
                  <span class="nav-text">Dashboard</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/about/update/60f9310d8fa6219c03894f64">
                  <i class="fa fa-laptop fa-2x"></i>
                  <span class="nav-text">About</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="#">
                  <i class="fa fa-list fa-2x"></i>
                  <span class="nav-text">Experience</span>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/project/list">
                  <i class="fa fa-folder-open fa-2x"></i>
                  <span class="nav-text">Projects</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-bar-chart-o fa-2x"></i>
                  <span class="nav-text">Contacts</span>
                </a>
              </li>
            </ul>

            <ul class="logout">
              <li>
                <a>
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">
                    <button
                      onClick={() => {
                        this.Logout();
                      }}
                    >
                      Logout
                    </button>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </div>
    );
  }
}

// import "./dashboard.css";
// import SideMenu, { menuItems } from "./SideMenu";

// import { Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useState } from "react";

// const Dashboard = () => <h1>Dashboard</h1>;
// const Pages= () => <h1>Pages</h1>;
// const Home = () => <h1>Pages/Home</h1>;
// const About = () => <h1>Pages/About</h1>;
// const Experience= () => <h1>Pages/Experience</h1>;
// const Project = () => <h1>Pages/Project</h1>;
// const Conatct = () => <h1>Pages/Contact</h1>;
// const Login = () => <h1>Login</h1>;

// function App(props) {
//   const [inactive, setInactive] = useState(false);

//   return (

//     <div className="App">
//          {localStorage.getItem("login",true) ? (         <nav class="main-menu">

//       <Router>
//         <SideMenu
//           onCollapse={(inactive) => {
//             console.log(inactive);
//             setInactive(inactive);
//           }}
//         />

//         <div className={`container ${inactive ? "inactive" : ""}`}>
//           {/* improvememt, not recorded in video, its just looping through menuItems
//           instead of hard coding all the routes */}
//           {menuItems.map((menu, index) => (
//             <>
//               <Route key={menu.name} exact={menu.exact} path={menu.to}>
//                 <h1>{menu.name}</h1>
//               </Route>
//               {menu.subMenus && menu.subMenus.length > 0
//                 ? menu.subMenus.map((subMenu, i) => (
//                     <Route key={subMenu.name} path={subMenu.to}>
//                       <h1>{subMenu.name}</h1>

//                     </Route>

//                   ))
//                 : null}
//             </>
//           ))}

//           {/* <Switch>
//             <Route exact path={"/"}>
//               <Dashboard />
//             </Route>
//             <Route exact path={"/content"}>
//               <Content />
//             </Route>
//             <Route path={"/content/courses"}>
//               <Courses />
//             </Route>
//             <Route path={"/content/videos"}>
//               <Videos />
//             </Route>
//             <Route path={"/design"}>
//               <Design />
//             </Route>
//             <Route exact path={"/content-2"}>
//               <Content2 />
//             </Route>
//             <Route path={"/content-2/courses"}>
//               <Courses2 />
//             </Route>
//             <Route path={"/content-2/videos"}>
//               <Videos2 />
//             </Route>
//             <Route path={"/design-2"}>
//               <Design2 />
//             </Route>
//           </Switch> */}

//         </div>
//       </Router>
//       </nav>) : <Redirect to="/login" ></Redirect> }

//     </div>
//   );
// }

// export default App;
