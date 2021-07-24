

import Cardpop from './cardpop';
import { Card } from './card';
import axios from "axios";
import React, { useState, useEffect } from "react";
// import experiences from './data';

function ExperienceCard() {

  const [projects, setProjects] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5003/project/")
        .then((response) => {
          console.log(response.data);
          setProjects([...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


  return (
    <main>
      {projects.map((item, index)  => (
        <Card classes="mr"  key={index}>
          <Card.Image src={`http://localhost:5003/projects/uploads/${item.image}`}  />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
           {/* <Card.Button>{experience.ctaText} </Card.Button> */}
          </Card.Body>
          <Cardpop/>
        </Card>
      ))}
    </main>
  );
}

export default ExperienceCard;