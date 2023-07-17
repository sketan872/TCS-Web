import { useState, useEffect } from "react";

import {
  getEvents
} from "./../getters";

import EventCard from "./../components/Cards/EventCard";
import CardsSection from "./../components/Sections/CardsSection";

export default function Developer() {
  const [events, setEvents] = useState([]);

  useEffect(_ => {
    setEvents(getEvents());
  }, []);


  return (
    <>
      <CardsSection
        title={"Events"}
        cards={
          events.map((i, id) =>
            <EventCard
              key={id}
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
