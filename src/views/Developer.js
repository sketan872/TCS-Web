import { useState, useEffect } from "react";

import {
  getEvents
} from "./../getters";

import EventCard from "./../components/Cards/EventCard";

import "./css/Developer.css";

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
