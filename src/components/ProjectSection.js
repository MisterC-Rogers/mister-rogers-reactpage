import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Projects from "./Projects";
import "./ProjectSection.scss";
import projectsData from '../data/projects'

function ProjectSection(props) {
  return (
    <Section
      id="pricing"
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="ProjectSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Projects
          buttonText="Go to Site"
          onChoosePlan={link => {
            // Add your own redirect logic here
            window.location= `${link}`
          }}
          items={projectsData}
        />
      </div>
    </Section>
  );
}

export default ProjectSection;
