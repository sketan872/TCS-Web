/*
 * data is kinda stored here for now
 * because if you store data on backend
 * this is from where you'll send GET requests
 */

export function getPostHolders() {
  return [
    {
      img: "/images/madhur.jpg",
      imgAlt: "Madhur Verma (President)",
      goalName: "Madhur Verma",
      goalRole: "President",
    },
    {
      img: "/images/mahima.jpg",
      imgAlt: "Mahima Bhardwaj (Vice President)",
      goalName: "Mahima Bhardwaj",
      goalRole: "Vice President",
    },
    {
      img: "/images/mohit.jpg",
      imgAlt: "Mohit Saini (Technical Head)",
      goalName: "Mohit Saini",
      goalRole: "Technical Head",
    },
    {
      img: "/images/vanshika.jpg",
      imgAlt: "Vanshika Kakkar (Media Head)",
      goalName: "Vanshika Kakkar",
      goalRole: "Media Head",
    }
  ];
}

export function getProjects() {
  return [
    {
      img: "/images/p1.jpg",
      imgAlt: "Madhur Verma (President)",
      goalName: "WEBSITE",
      goalRole: "BadAss website",
    },
    {
      img: "/images/ps.webp",
      imgAlt: "Mahima Bhardwaj (Vice President)",
      goalName: "APP",
      goalRole: "let's see how it will be",
    },
  ];
}

export function getSocietyGoals() {
  return [
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
  ];
}

export function getTechnologiesUsed() {
  return [
    {
      img: "/images/MM.jpg",
      title: "JavaScript",
      subtitle: "The programming language of the web"
    },
    {
      img: "/images/MM.jpg",
      title: "JavaScript",
      subtitle: "The programming language of the web"
    },
    {
      img: "/images/MM.jpg",
      title: "JavaScript",
      subtitle: "The programming language of the web"
    },
    {
      img: "/images/MM.jpg",
      title: "JavaScript",
      subtitle: "The programming language of the web"
    },
  ];
}

export function getFrontpageText() {
  return {
    title: "Hello World",
    subtitle: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`
  };
}

export function getEvents() {
  return [
    {
      title: "Event 1",
      img: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      title: "Event 2",
      img: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ];
}
