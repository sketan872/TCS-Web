import { useState, useEffect } from "react";

import {
  getFrontpageInfo,
  getSocietyGoals,
  getEvents,
  getProjects,
  getTechnologiesUsed,
  getPostHolders,
  getMentors
} from "./../getters";

import { toast } from "react-toastify";

import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
import CardsSection from "./../components/Sections/CardsSection";
import FormSection from "./../components/Sections/FormSection";
import SocietyGoalCard from "./../components/Cards/SocietyGoalCard";
import ProjectsCard from "./../components/Cards/ProjectsCard";
import TechnologyCard from "./../components/Cards/TechnologyCard";
import PostHolderCard from "./../components/Cards/PostHolderCard";
import EventCard from "./../components/Cards/EventCard";
import MentorsCard from "./../components/Cards/MentorsCard";

export default function HomePage() {
  const [fpInfo, setFpInfo] = useState({});
  const [goals, setGoals] = useState([]);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [postHolders, setPostHolders] = useState([]);
  const [mentors, setMentors] = useState([]);

  useEffect(_ => {
    setFpInfo(getFrontpageInfo());
    setGoals(getSocietyGoals());
    setEvents(getEvents());
    setProjects(getProjects());
    setTechnologies(getTechnologiesUsed());
    setPostHolders(getPostHolders());
    setMentors(getMentors());
  }, []);

  const buttonOnClick = _ => {
    toast("TCS society welcome's you");
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
        title={"Mentors"}
        cards={
          mentors.map((i, id) =>
            <MentorsCard
              key={id}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              subtitle1={i.goalRole1}
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
