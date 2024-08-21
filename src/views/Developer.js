import { useEffect, useState } from "react";
import CardsSection from "./../components/Sections/CardsSection";
import {
  getDeveloper
} from "./../getters";
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
