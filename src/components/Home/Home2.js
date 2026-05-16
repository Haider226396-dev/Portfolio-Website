import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import personal from "../../Assets/Projects/personal.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m passionate about building intelligent software solutions and
              exploring the rapidly evolving world of{" "}
              <i>
                <b className="purple">
                  Artificial Intelligence, Generative AI, and Full-Stack
                  Development.
                </b>
              </i>
              <br />
              <br />
              With a background in Software Engineering and hands-on industry
              experience, I specialize in developing{" "}
              <i>
                <b className="purple">scalable full-stack web applications</b>
              </i>
              , AI-powered products, and automation systems using modern
              technologies.
              <br />
              <br />
              My core expertise includes{" "}
              <i>
                <b className="purple">Full-Stack Web Development,</b>
              </i>{" "}
              AI & Generative AI Applications,
              <i>
                <b className="purple"> Python & JavaScript Development,</b>
              </i>{" "}
              and Large Language Model (LLM) Integrations.
              <br />
              <br />I also have strong experience building{" "}
              <i>
                <b className="purple">AI Automation & Workflow Systems</b>
              </i>{" "}
              using technologies like{" "}
              <i>
                <b className="purple">
                  Angular, React.js, Node.js, and Express.js
                </b>
              </i>
              .
              <br />
              <br />I enjoy transforming complex technical ideas into{" "}
              <i>
                <b className="purple">practical, user-friendly solutions</b>
              </i>{" "}
              that solve real-world problems and create meaningful impact.
              <br />
              <br />
              I’m particularly interested in developing{" "}
              <i>
                <b className="purple">AI-powered SaaS Products,</b>
              </i>{" "}
              Intelligent Automation Systems,
              <i>
                <b className="purple"> AI Agents & Assistants,</b>
              </i>{" "}
              and applications related to{" "}
              <i>
                <b className="purple">Computer Vision & Speech Technologies.</b>
              </i>
              <br />
              <br />
              Beyond development, I also have strong expertise in{" "}
              <i>
                <b className="purple">
                  Requirement Engineering and System Analysis
                </b>
              </i>
              , allowing me to effectively bridge the gap between business needs
              and technical implementation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{borderRadius: '50%'}} src={personal} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Haider226396-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/haider226396/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haider-malik-924189230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/haider_malik005/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
