import { useState, useEffect } from "react";

import { getDeveloper } from "./../getters";

import EventCard from "./../components/Cards/EventCard";
import CardsSection from "./../components/Sections/CardsSection";


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
              key={id}
              img={i.img}
              alt={`Developer ${i.title} Photo`}
              title={i.title}
              subtitle={i.description}
              />
          )
        }
        />
    </>
  );
}
