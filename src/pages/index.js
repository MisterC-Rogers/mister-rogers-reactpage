import React from "react";
import IntroductionSection from "./../components/IntroductionSection";
import TechSkills from "./../components/TechSkills";
import FeaturesSection from "./../components/FeaturesSection";
import { useRouter } from "./../util/router.js";
import shortHair from "../images/meShortHair.jpg";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <IntroductionSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Mister Charles Rogers"
        subtitle="Creative and people-oriented Full Stack Web Developer with project management experience. Strong knowledge of the creations programming languages relevant to the web. Adept at motivating self and others. Passionate about computer science and educating the next wave of programmers. Hungry for knowledge, always looking for the how and why something is the way it is. Never settling for the short answer."
        buttonText="More About Me"
        image= {shortHair}
        buttonOnClick={() => {
          // Navigate to about page
          router.push("/about");
        }}
      />
      <TechSkills
        color="dark"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Technical Skills"
        subtitle="This is a list of some of the technical skills I have at the moment. The list is always changing for the better"
      />
      <FeaturesSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Featured Projects"
        subtitle="Here is a collection of projects that I am really proud of at the moment."
        buttonText="More projects"
        buttonOnClick={() => {
          // Navigate to projects page
          router.push("/projects");
        }}
      />
    </>
  );
}

export default IndexPage;
