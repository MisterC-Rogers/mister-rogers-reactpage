import React from "react";
import Section from "./Section";
import SectionHeader from './SectionHeader'
import Skills from "./Skills";
// import the skills data
import skillsData from '../data/skills'

function TechSkills(props) {
  
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Skills
          items={skillsData}
        />
      </div>
    </Section>
  );
}

export default TechSkills;
