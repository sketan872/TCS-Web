import { useState, useEffect } from "react";

import { getDevelopers } from "./../getters";

import DeveloperCard from "./../components/Cards/DeveloperCard";
import CardsSection from "./../components/Sections/CardsSection";

export default function Developer() {
  const [developers, setDevelopers] = useState([]);

  useEffect(_ => {
    setDevelopers(getDevelopers());
  }, []);

  return (
    <>
      <CardsSection
        title={"Developer"}
        cards={
          developers.map((i, id) =>
            <DeveloperCard
              key={id}
              img={i.img}
              alt={`${i.title} Photo`}
              title={i.title}
              subtitle={i.subtitle}
              />
          )
        }
        />
    </>
  );
}
