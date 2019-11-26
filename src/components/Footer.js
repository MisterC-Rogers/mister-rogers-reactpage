import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link className="navbar-item" to="/">
            <img 
              className="image" 
              src={props.logo}
              alt="Logo" 
            />
            <h6>Home</h6>
            <img 
              className="image" 
              src={props.logo}
              alt="Logo" 
            />
          </Link>
        </div>
        <div className="links right">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social right">
          <a
            href="https://twitter.com/MisterCRogers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/charles-a-rogers-sr-823636102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-linkedin" />
            </span>
          </a>
          <a
            href="https://instagram.com/charlie_fn_rogers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
          <a
            href="https://github.com/MisterC-Rogers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-github" />
            </span>
          </a>
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;
