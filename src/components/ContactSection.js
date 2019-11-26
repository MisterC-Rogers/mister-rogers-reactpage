import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FormikCloudForm from "./FormField";
import "./ContactSection.scss";

function ContactSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="ContactSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <FormikCloudForm />
      </div>
    </Section>
  );
}

export default ContactSection;
