import { useState, useEffect } from "react";

import {
  getDeveloper
} from "./../getters";

import CardsSection from "./../components/Sections/CardsSection";
import Developers from "./../components/Cards/Developers";

import "./css/Developer.css";

export default function Developer() {
  const [events, setDeveloper] = useState([]);

  useEffect(_ => {
    setDeveloper(getDeveloper());
  }, []);


  return (
    <>
      <CardsSection
        title={"Developer"}
        cards={
          events.map((i, id) =>
            <Developer
              key={`event-${id}`}
              img={i.img}
              alt={`${i.title} Poster`}
              title={i.title}
              subtitle={i.description}
              />
          )
        }
        />
    </>
  );
}
