import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "Generative AI Developer",
          "Full-Stack Developer",
          "Angular & React Developer",
          "Python & JavaScript Developer",
          "LLM & AI Automation Developer",
          "MERN Stack Developer",
          "AI SaaS Builder",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
