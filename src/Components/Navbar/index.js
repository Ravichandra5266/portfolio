import "./index.css";

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { RxCrossCircled } from "react-icons/rx";

import { useState } from "react";

const Navbar = () => {
  const [ham, setHam] = useState(false);

  const onclickHam = () => {
    setHam(!ham);
  };
  return (
    <nav className="nav-container">
      <div className="nav-flex">
        <Link to="/" className="home-link">
          <h1 className="nav-logo">Portfolio</h1>
        </Link>

        {ham ? (
          <RxCrossCircled className="ham-icon" onClick={onclickHam} />
        ) : (
          <GiHamburgerMenu className="ham-icon" onClick={onclickHam} />
        )}
      </div>

      {ham ? (
        <ul className="sm-nav-list">
          <Link to="/" className="link">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/projects" className="link">
            <li className="nav-item">Projects</li>
          </Link>
        </ul>
      ) : (
        ""
      )}

      <ul className="lg-nav-list">
        <Link to="/" className="link">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/projects" className="link">
          <li className="nav-item">Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
