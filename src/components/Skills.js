import React from "react";
import "./Skills.scss";

function Skills(props) {
  return (
    <div className="columns is-centered is-multiline">
      {props.items.map((item, index) => (
        <div className="column is-narrow has-text-centered" key={index}>
          <div className="Skills__logo">
            <img src={item.image} width={item.width} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
