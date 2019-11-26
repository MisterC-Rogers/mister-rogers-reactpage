import React from "react";
import { useRouter } from "./../util/router.js";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton"

import './ContectSection.scss'

function ContentSection(props) {
  const router = useRouter();
  return (
    <div>
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
            size={2}
          />
        </div>
      </Section>
      <div className='body'>
        <p className='text'>
      I am a man trying to do better for his family by giving them the things I did not have, or could not get when I was a younger man. I was in the Military for eight years, and I have no career to show for it, because I did not invest in my life after the Military or take advantage of the Military's extra training courses. After the Military, I joined the International Brotherhood of Electrical Workers, and started an entertainment company in the heart of Oklahoma. I wanted to build a stronger online presence for my company, so I built a website. This is when I fell in love with <b>coding</b>. I started working the FreeCodeCamp curriculum in the summer of 2016, I learned the basics about <b>HTML CSS</b> and <b>jQuery</b> but because it was geared towards self study with limited help during my start. I started at Lambda School full time in February 2019 in their Full Stack Web Developer track. I can say, without a doubt, that you are and will not be the only one to struggle with learning how to code. There were many nights I wanted to quit. Many nights I was excited that I got some thing to work, and even more nights where I studied to get it. It was not until I talked to my wonderful Team Leads, that Lambda assigns to every student, that I started to get serious about my education. The phrase that resonated with me the most was, "Lambda will not let you fail until you give up on yourself and the process". After that my Team Lead would force me to research, read documentations, and answer random questions about my track's main language. I have struggled more then a little bit throughout my time at Lambda School, though; one of the best things Lambda will teach you is how to learn. I for one, learn by doing, asking questions, and redoing. One of the Computer Science instructors put in better words <b>"Do not fake it until you make it, Grind it until you find it."</b> Now, that is what I do every day by learning some thing new, and relearning something I thought I knew. It is because of my drive to be better, and be able to provide for my family that I have learned. 
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>C#</li>
          <li>Java</li>
        </ul>
        I am not an expert at any of these languages, because who is perfect and has all the answers? Though one thing I am is a <b>GRINDER</b> and I do not quit things that are good for me.
        </p>
        <SectionButton
            parentColor= "light"
            size="medium"
            onClick={() => {
              // Navigate to projects page
              router.push("/contact");
            }}
          >
            Contact Me
        </SectionButton>
      </div>
    </div>
  );
}

export default ContentSection;


// I fell off track because of that, and focused on working in the electrical field. The Union is great, though; it has it's down falls. Fact is that the unions in Oklahoma are not securing the jobs to keep us all employed. It was during a time of being unemployed when I came across the Lambda School ad on YouTube. I talked to my wife about the move I was thinking of making, and she agreed it was a smart one if I stuck with it to the end. In December of 2018, I signed up and in February of 2019. I started my time full studies with Lambda School "Full stack Web developer track".