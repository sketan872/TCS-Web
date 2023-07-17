import { useState, useEffect } from "react";

import {
  getDeveloper
} from "./../getters";

<<<<<<< HEAD:src/views/Developer.js
import CardsSection from "./../components/Sections/CardsSection";
import Developers from "./../components/Cards/Developers";

import "./css/Developer.css";
=======
import EventCard from "./../components/Cards/EventCard";
import CardsSection from "./../components/Sections/CardsSection";
>>>>>>> d1e0e9f91bac3ce1841304d508f4ad1123e97704:src/views/DevelopersPage.js

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
<<<<<<< HEAD:src/views/Developer.js
            <Developer
              key={`event-${id}`}
=======
            <EventCard
              key={id}
>>>>>>> d1e0e9f91bac3ce1841304d508f4ad1123e97704:src/views/DevelopersPage.js
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
