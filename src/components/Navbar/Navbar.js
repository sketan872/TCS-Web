import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import "./css/Navbar.css";

const Navbar = _ => {
  const location = useLocation().pathname;

  // listen to screen width changes
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(_ =>
    window.addEventListener("resize", _ =>
      setScreenWidth(window.innerWidth))
  , []);

  console.log(screenWidth);

  const links = [
    {
      label: "Home",
      path: "/"
    }, {
      label: "Test Page",
      path: "/test"
    }, {
      label: "Instagram",
      path: "https://www.instagram.com/__rahul_goyal___/"
    }, {
      label: "Facebook",
      path: "https://www.facebook.com/profile.php?id=100038954747406"
    }, {
      label: "GitHub",
      path: "https://github.com/rahulsenpai"
    }, {
      label: "Photos",
      path: "https://www.instagram.com/__rahul_goyal___/"
    }, {
      label: "Registration",
      path: "https://www.instagram.com/__rahul_goyal___/"
    }
  ];

  return (
    <div className="navbar">
      <div className="image-container">
        <img src="/images/site-logo.png" alt="site-logo" />
      </div>

      <nav>
        {links.map((i, id) => <Link key={`nav-${id}`} className={location === i.path ? "current" : null} to={i.path}>{i.label}</Link>)}
      </nav>
    </div>
  );
}

export default Navbar;
