import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton"
import Features from "./Features";
import featured from '../data/featured'

function FeaturesSection(props) {
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
        <Features
          items={featured}
        />
        <SectionButton
          parentColor={props.color}
          size="medium"
          onClick={props.buttonOnClick}
        >
          {props.buttonText}
        </SectionButton>
      </div>
    </Section>
  );
}

export default FeaturesSection;
