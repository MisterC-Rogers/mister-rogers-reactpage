import React from "react";
import "./Projects.scss";

function Projects(props) {
  return (
    <div className="columns is-centered is-multiline">
      {props.items.map((item, index) => (
        <div className="Projects__column column is-half" key={index}>
          <div
            className={
              "Projects__card card" +
              (item.emphasized === true ? " emphasized" : "")
            }
          >
            <div className="Projects__card-content card-content">
              <div className="Projects__project">
                <span className="is-size-3 ">{item.title}</span>
              </div>
              <img src={item.image} alt={item.alt}></img>
              <p className="Projects__project-description">
                {item.description}
              </p>
              
              <button
                className="Projects__button button is-medium is-primary"
                onClick={() => props.onChoosePlan(item.link)}
              >
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
