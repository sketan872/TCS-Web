/*
 * data is kinda stored here for now
 * because if you store data on backend
 * this is from where you'll send GET requests
 */

import axios from "axios";

export function getPostHolders() {
  return [
    {
      img: "https://tcs.vidhukant.xyz/images/madhur.jpg",
      imgAlt: "Madhur Verma (President)",
      goalName: "Madhur Verma",
      goalRole: "President",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/mahima.jpg",
      imgAlt: "Mahima Bhardwaj (Vice President)",
      goalName: "Mahima Bhardwaj",
      goalRole: "Vice President",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/mohit.jpg",
      imgAlt: "Mohit Saini (Technical Head )",
      goalName: "Mohit Saini",
      goalRole: "Technical & Project Head",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/vanshika.jpg",
      imgAlt: "Vanshika Kakkar (Media Head)",
      goalName: "Vanshika Kakkar",
      goalRole: "Media & Creative Head",
    }
  ];
}

export function getMentors() {
  return [
    {
      img: "https://tcs.vidhukant.xyz/images/jyoti.jpg",
      imgAlt: "Dr. Jyoti Chaudhary(HOD)",
      goalName: "Dr. Jyoti Chaudhary",
      goalRole: "HOD",
      goalRole1: "CE Department",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/anil.jpg",
      imgAlt: "Mr. Anil Yadav",
      goalName: "Mr. Anil Yadav",
      goalRole: " Assistant Professor",
      goalRole1: "CE Department",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/archna.jpg",
      imgAlt: "Mrs. Archana parmar",
      goalName: "Mrs. Archana Parmar",
      goalRole: "Assistant Professor",
      goalRole1: "CE Department",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/ajit.jpg",
      imgAlt: "Mr.Ajit Kadyan",
      goalName: "Mr.Ajit Kadyan",
      goalRole: "Assistant Professor",
      goalRole1: "CE Department",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/minakshi.jpg",
      imgAlt: "MS. MEENAKSHI CHAWLA",
      goalName: "MS. Meenakshi Chawla",
      goalRole: "Assistant Professor",
      goalRole1: "CE Department",
    },
  ];
}

export function getDevelopers() {
  return [
    {
      img: "https://tcs.vidhukant.xyz/images/mohit.jpg",
      imgAlt: "Mohit Saini (Technical Head)",
      title: "Mohit Saini",
      subtitle: "Technical Head",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/rahul.webp",
      imgAlt: "Rahul Goyal(front-end developer)",
      title: "Rahul Goyal",
      subtitle: "Front-End Developer",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/vidhukant.webp",
      imgAlt: "Vidhu Kant Sharma(back-end developer)",
      title: "Vidhu Kant sharma",
      subtitle: "Bank-End Developer",
    }
  ];
}

export function getProjects() {
  return [
    {
      img: "https://tcs.vidhukant.xyz/images/website.png",
      imgAlt: "website",
      goalName: "WEBSITE",
      goalRole: "It describes about the society's event and workshop.",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/app.png",
      imgAlt: "app",
      goalName: "APP",
      goalRole: "It describes about the society's events, members and there mentors information and gallery.",
    },
  ];
}

export function getSocietyGoals() {
  return [
    {
      img: "https://tcs.vidhukant.xyz/images/ppt.jpg",
      imgAlt: "P",
      goalName: "Presentation Expert",
      goalRole: "Presentations are the most important aspect of the IT industry that an intern should be skilled in and we look this skill as an important goal.",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/resume.webp",
      imgAlt: "S",
      goalName: "Skilled Resume",
      goalRole: "Making each member aware about the technology prevailing in the IT industry and helping them achieve those skills to fit in resume.",
    },
    {
      img: "https://tcs.vidhukant.xyz/images/placement.jpeg",
      imgAlt: "P",
      goalName: "Placement Ready",
      goalRole: "The ultimate Goal is to make an individual ready for the Placement that every student thrives for.",
    }
  ];
}

export function getTechnologiesUsed() {
  return [
    {
      img: "https://tcs.vidhukant.xyz/images/technologies/html.png",
      title: "HTML",
      subtitle: "Use in Web-Development"
    },
    {
      img: "https://tcs.vidhukant.xyz/images/technologies/css.png",
      title: "CSS",
      subtitle: "Use in Web-Development"
    },
    {
      img: "https://tcs.vidhukant.xyz/images/technologies/js.png",
      title: "Javascript",
      subtitle: "Use in Web-Development"
    },
    {
      img: "https://tcs.vidhukant.xyz/images/technologies/react.svg",
      title: "React.js",
      subtitle: "Use in Web-Development"
    },
    {
      img: "https://tcs.vidhukant.xyz/images/technologies/java.png",
      title: "Java",
      subtitle: "Use in Programing"
    },
    {
      img: "https://tcs.vidhukant.xyz/images/technologies/cpp.png",
      title: "C++",
      subtitle: "Use in Programing"
    },
   
   
  ];
}

export function getFrontpageInfo() {
  return {
    title: "#Let's Get ",
    subtitle: "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.",
    logoPath: "https://tcs.vidhukant.xyz/images/site-logo.png",
    buttonText: "Click Me!"
  };
}

export function getEvents() {
  return [
    {
      title: "BGMI",
      img: "https://tcs.vidhukant.xyz/images/bgmi.jpeg",
      description: "BGMI is the annual gaming event organised by our society in which the winner can redeem the cash prize and t-shirts."
    },
    {
      title: "CODE WAR",
      img: "https://tcs.vidhukant.xyz/images/codewar.jpeg",
      description: "Code War is the annual coding event of the society and the winner gets the tag of coder of the year on our website."
    },
    {
      title: "Qates      ",
      img: "https://tcs.vidhukant.xyz/images/qates.jpeg",
      description: "Qates is the fun-tech Quiz event of the society which is organised to check the tech awareness of the students."
    },
    {
      title: "Slackware",
      img: "https://tcs.vidhukant.xyz/images/slackware.jpeg",
      description: "Slackware is an exciting workshop that include making viruses, the remote sensing of different devices and other exciting hacks."
    },
  ];
}

export function saveRegistration(data, ok, err) {
    fetch("/api/registrations/quates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(_res => ok(_res))
    .catch(_err => err(_err))
}