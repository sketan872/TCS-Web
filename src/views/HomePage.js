import { useState, useEffect } from "react";

import {
  getFrontpageInfo,
  getSocietyGoals,
  getEvents,
  getProjects,
  getTechnologiesUsed,
  getPostHolders
} from "./../getters";

import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
import CardsSection from "./../components/Sections/CardsSection";
import FormSection from "./../components/Sections/FormSection";
import SocietyGoalCard from "./../components/Cards/SocietyGoalCard";
import ProjectsCard from "./../components/Cards/ProjectsCard";
import TechnologyCard from "./../components/Cards/TechnologyCard";
import PostHolderCard from "./../components/Cards/PostHolderCard";
import EventCard from "./../components/Cards/EventCard";

export default function HomePage() {
  const [fpInfo, setFpInfo] = useState({});
  const [goals, setGoals] = useState([]);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [postHolders, setPostHolders] = useState([]);

  useEffect(_ => {
    setFpInfo(getFrontpageInfo());
    setGoals(getSocietyGoals());
    setEvents(getEvents());
    setProjects(getProjects());
    setTechnologies(getTechnologiesUsed());
    setPostHolders(getPostHolders());
  }, []);

  const buttonOnClick = _ => {
    alert("Hello sir kaise ho aap");
  }

  return (
    <>
      <CircularLogoAndText
        title={fpInfo.title}
        subtitle={fpInfo.subtitle}
        logoPath="/images/site-logo.png"
        logoAlt="ladsjfladjfa"
        buttonText={fpInfo.buttonText}
        buttonOnClick={buttonOnClick}
        />

      <CardsSection
        title={"Society Goals"}
        cards={
          goals.map((i, id) =>
            <SocietyGoalCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

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

      <CardsSection
        title={"Projects"}
        cards={
          projects.map((i, id) =>
            <ProjectsCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <CardsSection
        title={"Technologies"}
        cards={
          technologies.map((i, id) =>
            <TechnologyCard
              key={id}
              img={i.img}
              title={i.title}
              subtitle={i.subtitle}
              />
          )
        }
        />

      <CardsSection
        title={"Post Holders"}
        cards={
          postHolders.map((i, id) =>
            <PostHolderCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <FormSection
        title={"Registration Form"}
        />
    </>
  );
}
