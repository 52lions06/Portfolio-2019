import React from "react";
import logo from "../../assests/images/wm_black_badge.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="header-logo">
        <div className="header-item">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>{" "}
        </div>
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/">
                    <i className="fas fa-home" />
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <i className="fas fa-user" />
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link to="/skill">
                    <i className="fas fa-list-alt" />
                    <p>Skills</p>
                  </Link>
                </li>
                <li>
                  <Link to="projects">
                    <i className="fas fa-laptop" />
                    <p>Projects</p>
                  </Link>
                </li>
                <li>
                  <Link to="contact">
                    <i className="far fa-envelope" />
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
              <div className="hamburger-social">
                <div>
                  <a href="https://www.linkedin.com/in/williammckelvey/">
                    <i className="fab fa-linkedin" />
                  </a>{" "}
                </div>
                <div>
                  <a href="https://github.com/52lions06">
                    <i className="fab fa-github-square" />
                  </a>{" "}
                </div>
                <div>
                  <a href="https://twitter.com/WillLikesToCode">
                    <i className="fab fa-twitter-square" />
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <ul>
          <li className="header-item">
            <Link to="/">
              <i className="fas fa-home" />
              <p>Home</p>
            </Link>
          </li>
          <li className="header-item">
            <Link to="/about">
              <i className="fas fa-user" />
              <p>About</p>
            </Link>
          </li>
          <li className="header-item ">
            <Link to="/skill">
              <i className="fas fa-list-alt" />
              <p>Skills</p>
            </Link>
          </li>
          <li className="header-item">
            <Link to="projects">
              <i className="fas fa-laptop" />
              <p>Projects</p>
            </Link>
          </li>
          <li className="header-item">
            <Link to="contact">
              <i className="far fa-envelope" />
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <div className="header-item">
          <a href="https://www.linkedin.com/in/williammckelvey/">
            <i className="fab fa-linkedin" />
          </a>{" "}
        </div>
        <div className="header-item">
          <a href="https://github.com/52lions06">
            <i className="fab fa-github-square" />
          </a>{" "}
        </div>
        <div className="header-item">
          <a href="https://twitter.com/WillLikesToCode">
            <i className="fab fa-twitter-square" />
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
