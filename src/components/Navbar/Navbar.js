import { useLocation, Link } from 'react-router-dom';

import './css/Navbar.css';

const Navbar = _ => {
  const location = useLocation().pathname;

  return(
    <div className="navbar">
      <div className="image-container">
        <img src="/images/t.png" alt="logo" />
      </div>

      <nav>
        <Link className={location === "/" ? "current" : ""} to="/">Home</Link>
        <Link className={location === "/test" ? "current" : ""} to="/test">Test Page</Link>

        <a href="https://www.instagram.com/__rahul_goyal___/">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100038954747406">Facebook</a>
        <a href="https://github.com/rahulsenpai">GitHub</a>
        <a href="https://www.instagram.com/__rahul_goyal___/">Photos</a>
        <a href="https://www.instagram.com/__rahul_goyal___/">Regestration</a>
      </nav>
    </div>
  );
}

export default Navbar;
