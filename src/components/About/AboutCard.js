import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haider Abbas </span>
            originally from{" "}
            <span className="purple">Jauharabad, District Khushab.</span>
            <br />
            Currently, I am living in{" "}
            <span className="purple">Islamabad, Pakistan.</span>
            <br />I have completed my{" "}
            <span className="purple">
              Bachelor's in Software Engineering
            </span>{" "}
            from <span className="purple">COMSATS University Islamabad.</span>
            <br />
            I am a passionate{" "}
    <span className="purple">
      Full-Stack Developer & AI Enthusiast
    </span>{" "}
    with{" "}
    <span className="purple">
      3+ years of professional experience
    </span>{" "}
            <br />I am passionate about{" "}
            <span className="purple">
              Artificial Intelligence, Generative AI, and Full-Stack Development
            </span>
            , with hands-on experience in building scalable web applications,
            AI-powered systems, and intelligent automation solutions.
            <br />
            <br />
            My technical expertise includes{" "}
            <span className="purple">
              Python, JavaScript, Angular, React.js, Node.js, Express.js, REST
              APIs, LLM Integrations, and AI Automation Systems.
            </span>
            <br />
            <br />
            I enjoy transforming innovative ideas into practical, user-friendly
            products that solve real-world problems and create meaningful impact
            through technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & Emerging Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Following Tech Trends & Startups
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build technology that creates meaningful impact!"{" "}
          </p>

          <footer className="blockquote-footer">Haider</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
