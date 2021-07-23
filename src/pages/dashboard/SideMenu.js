import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";

export const menuItems = [
  
    {
      name: "Dashboard",
      exact: true,
      to: "/",
      iconClassName: "bi bi-speedometer2",
    },
    {
      name: "Pages",
      exact: true,
      to: `/pages`,
      iconClassName: "bi bi-file-break-fill",
      subMenus: [
        { name: "Home", to: "/pages/home" },
        { name: "About", to: "/pages/about" },
        { name: "Experience", to: "/pages/experience" },
        { name: "Project", to: "/pages/project" },
        { name: "Contact Us", to: "/pages/contact" },
        
      ],
    },
    { name: "Login", to: `/login`, iconClassName: "bi bi-vector-pen" },
 
  ];

  
const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);
  
    useEffect(() => {
      if (inactive) {
        removeActiveClassFromSubMenu();
      }
  
      props.onCollapse(inactive);
    }, [inactive]);
  
   
    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    };
  
   
    useEffect(() => {
      let menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((el) => {
        el.addEventListener("click", (e) => {
          const next = el.nextElementSibling;
          removeActiveClassFromSubMenu();
          menuItems.forEach((el) => el.classList.remove("active"));
          el.classList.toggle("active");
          console.log(next);
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, []);
  


    return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
    <div className="top-section">
        <div className="side-logo">
        <span>SJ</span>
        <i className="fab fa-connectdevelop"></i>
        </div>
       
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="fas fa-chevron-circle-right"></i>
          ) : (
            <i class="fas fa-chevron-circle-left"></i>
            )}
        </div>
      </div>

        <div className="divider"></div>

        <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
          
        </ul>
      </div>
      <div className="side-menu-footer">
       
        <div className="user-info">
        <h5>Saeed Jurdi</h5>
          <p>saeed.el.jurdi@gmail.com</p>
        </div>
      </div>
    </div>

     
  );
};

export default SideMenu;
