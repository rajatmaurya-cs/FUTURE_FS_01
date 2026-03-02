import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    href: "mailto:rajatmaurya.dev@gmail.com",
    icon: <MdEmail />,
    label: "Email",
  },
  {
    href: "https://github.com/rajatmaurya-cs",
    icon: <AiFillGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rajat-maurya-3a172331b/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
];

const Home = () => (
  <section>
    {/* HERO SECTION */}
    <Container fluid className="home-section" id="home">
      <Particle />

      <Container className="home-content">
        <Row className="align-items-center">
          <Col md={7} className="home-header">
            <h1 className="heading pb-3">
              Hi There!{" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M <strong className="main-name">Rajat Maurya</strong>
            </h1>

            <div className="type-wrapper">
              <Type />
            </div>
          </Col>

          <Col md={5} className="text-center">
            <img
              src={homeLogo}
              alt="Developer illustration"
              className="img-fluid home-image"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </Container>

    <Home2 />

    {/* CONTACT SECTION */}
    <Container>
      <Row className="py-5">
        <Col md={12} className="home-about-social text-center">
          <h1>Get In Touch</h1>

          <p>
            Feel free to <span className="purple">connect</span> with me
          </p>

          <ul className="home-about-social-links list-unstyled d-flex justify-content-center gap-4">
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label} className="social-icons">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;