import { useEffect, useState } from "react";
import {
  getEvents,
  getFrontpageInfo,
  getMentors,
  getPostHolders,
  getProjects,
  getSocietyGoals,
  getTechnologiesUsed
} from "./../getters";
import './css/HomePage.css';

import { toast } from "react-toastify";

import CardsSection from "./../components/Sections/CardsSection";
import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
// import FormSection from "./../components/Sections/FormSection";
import { Link } from "react-router-dom";
import EventCard from "./../components/Cards/EventCard";
import MentorsCard from "./../components/Cards/MentorsCard";
import PostHolderCard from "./../components/Cards/PostHolderCard";
import ProjectsCard from "./../components/Cards/ProjectsCard";
import SocietyGoalCard from "./../components/Cards/SocietyGoalCard";
import TechnologyCard from "./../components/Cards/TechnologyCard";

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
        <div className="btn-wrapper"><button type="submit" className="btn"><Link className="btn-link" to="/register">Register</Link></button></div>
   
      {/*<FormSection
        title={"Registration Form"}
        />*/}
    </>
  );
}
