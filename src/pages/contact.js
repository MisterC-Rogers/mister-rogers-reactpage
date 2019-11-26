import React from "react";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <ContactSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Contact Me By Email"
      subtitle=""
      showNameField={true}
    />
  );
}

export default ContactPage;
