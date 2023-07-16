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
      img: "/images/technologies/react.svg",
      title: "React.js",
      subtitle: "React Description Text"
    },
    {
      img: "/images/technologies/java.png",
      title: "Java",
      subtitle: "Java Description Text"
    },
    {
      img: "/images/technologies/cpp.png",
      title: "C++",
      subtitle: "C++ Description Text"
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
      title: "BGMI",
      img: "/images/bgmi.jpeg",
      description: "BGMI is the annual gaming event organised by our society in which the winner can redeem the cash prize and t-shirts."
    },
    {
      title: "CODE WAR",
      img: "/images/codewar.jpeg",
      description: "Code War is the annual coding event of the society and the winner gets the tag of coder of the year on our website."
    },
    {
      title: "Qates      ",
      img: "/images/qates.jpeg",
      description: "Qates is the fun-tech Quiz event of the society which is organised to check the tech awareness of the students."
    },
    {
      title: "Slackware",
      img: "/images/slackware.jpeg",
      description: "Slackware is an exciting workshop that include making viruses, the remote sensing of different devices and other exciting hacks."
    },
  ];
}
