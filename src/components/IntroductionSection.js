import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./IntroductionSection.scss";

function IntroductionSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
            />
            <SectionButton
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure>
              <img className="IntroductionSection__image box " src={props.image} alt="Mister Rogers" />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default IntroductionSection;