import Event from "./events/Event";
import SocietyGoalCard from "./../components/Cards/SocietyGoalCard";

import "./css/HomePage.css";

export default function HomePage() {
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
      <section class="fpage" id="fpage">
        <div className="content">
          <h1>Rahul Goyal</h1>
        </div>
      </section>

      <section class="Society-goals" id="Society-goals">
        <div className="heading">
          <span>Society Goals</span>
        </div>

        <div className="goals-container">
          {goals.map(i =>
            <SocietyGoalCard
              img={i.img}
              alt={i.imgAlt}
              title={i.goalName}
              subtitle={i.goalRole}
              />
          )}
        </div>
      </section>
    </>
  );
}
