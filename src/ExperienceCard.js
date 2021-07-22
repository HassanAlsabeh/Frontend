import React from 'react';
import './ExperienceCard.scss'
import Cardpop from './cardpop';
import { Card } from './components/card';
import experiences from './data';
//import Cardpop from './cardpop'
function ExperienceCard() {
  return (
    <main>
      {experiences.map(experience => (
        <Card classes="mr" key={`${experience.id}`}>
          <Card.Image src={experience.image} alt={experience.title} />
          <Card.Body>
            <Card.Title>{experience.title}</Card.Title>
            <Card.Text>{experience.desc}</Card.Text>
           {/* <Card.Button>{experience.ctaText} </Card.Button> */}
          </Card.Body>
          <Cardpop/>
        </Card>
      ))}
    </main>
  );
}

export default ExperienceCard;