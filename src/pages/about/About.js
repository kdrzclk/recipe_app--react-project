import React from "react";
import { AboutImage, AboutWrapper, AboutTitle, AboutText } from "./style";
import Coding from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
      <AboutWrapper>
        <AboutImage src={Coding} />
        <AboutTitle>
          <h2>
            About Software Developer <span>KADIR OZCELIK</span>
          </h2>
        </AboutTitle>
        <AboutText>
          <h3>
            I'm <span>Kadir</span>
          </h3>
          <h4>I'm currenctly learning Full-Stack Development Languages.</h4>
          <h4>
            I've already known JS, ReactJS, NodeJS, SQL, Python, Django, HTML5,
            CSS, BootStrap5, SASS{" "}
          </h4>
          <h4>
            <a href="mailto:kadir.oxcelik16@gmail.com">Send E-mail</a>:
            kadir.ozcelik16@gmail.com
          </h4>
        </AboutText>
      </AboutWrapper>
    </div>
  );
};

export default About;
