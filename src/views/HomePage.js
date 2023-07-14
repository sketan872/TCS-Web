import CircularLogoAndText from "./../components/Sections/CircularLogoAndText";
import CardsSection from "./../components/Sections/CardsSection";
import SocietyGoalCard from "./../components/Cards/SocietyGoalCard";

import "./css/HomePage.css";

export default function HomePage() {
  // NOTE: probably will be loaded from backend
  const title = "Hello World";
  const subtitle = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

  const goals = [
    // TODO: goals baad me backend se uthane hai
    {
      img: "/images/MM.jpg",
      imgAlt: "MM",
      goalName: "Presentation Expert",
      goalRole: "Presentations are the most important aspect of the IT industry that an intern should be skilled in and we look this skill as an important goal.",
    },
    {
      img: "/images/rah.jpg",
      imgAlt: "rah",
      goalName: "Skilled Resume",
      goalRole: "Making each member aware about the technology prevailing in the IT industry and helping them achieve those skills to fit in resume.",
    },
    {
      img: "/images/vid.jpg",
      imgAlt: "vid",
      goalName: "Placement Ready",
      goalRole: "The ultimate Goal is to make an individual ready for the Placement that every student thrives for.",
    }
  ]

  return (
    <>
      <CircularLogoAndText
        title={title}
        subtitle={subtitle}
        logoPath="/images/site-logo.png"
        logoAlt="ladsjfladjfa"
        />

      <CardsSection
        title={"Society Goals"}
        bgColorTitle={"white"}
        fgColorTitle={"black"}
        bgColor={"#161020"}
        fgColor={"white"}
        cards={
          goals.map((i, id) =>
            <SocietyGoalCard
              key={`goal-${id}`}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <h1>Events yaha aayenge</h1>

      <CardsSection
        title={"Projects"}
        bgColorTitle={"white"}
        fgColorTitle={"black"}
        bgColor={"#161020"}
        fgColor={"white"}
        cards={
          goals.map((i, id) =>
            <SocietyGoalCard
              key={`goal-${id}`}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

      <h1>Technologies yaha aayegi</h1>

      <CardsSection
        title={"Post Holders"}
        bgColorTitle={"white"}
        fgColorTitle={"black"}
        bgColor={"#161020"}
        fgColor={"white"}
        cards={
          goals.map((i, id) =>
            <SocietyGoalCard
              key={`goal-${id}`}
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )
        }
        />

    </>
  );
}
