import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layouts/Layout";
import "../components/Projects/_projects.scss";

const funItems = [
  {
    title: "Art Wall",
    description:
      "A place for sketches, visual experiments, graphic studies, and pieces I make outside formal engineering work. The portfolio includes placeholder slots so I can drop in real images later without changing the structure.",
  },
  {
    title: "Graphics Playground",
    description:
      "Small experiments around rendering, scene composition, animation, ray tracing, neural rendering, and visual computing — the fun side of the same interests behind CITV and graphics research.",
  },
  {
    title: "Photography & Film Looks",
    description:
      "A lightweight gallery concept for street photos, travel images, color grading experiments, and visual references that influence how I think about interfaces and visual systems.",
  },
  {
    title: "Food Experiments",
    description:
      "Cooking, baking, recipe experiments, and the small lessons that come from making things by hand. This gives the site a more human layer without taking away from the technical portfolio.",
  },
  {
    title: "Music & Listening Notes",
    description:
      "A place to capture what I am listening to, what I am replaying, and the kind of sound or mood I like working around.",
  },
  {
    title: "Idea Notebook",
    description:
      "Unpolished product ideas, interaction patterns, AI concepts, and little observations that could become future projects.",
  },
];

const Fun: React.FC = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <Layout sidebarVariant="spotifyOnly">
        <section id="fun" className="projects-section my-1">
          <h2>Fun Stuff</h2>
          <p style={{ maxWidth: "760px", margin: "0 auto 1rem", textAlign: "center" }}>
            Not everything has to be a polished project. This is where I want to keep the art, experiments, visuals, food, music, and ideas that make the technical work feel more alive.
          </p>
          <Row className="g-4 justify-content-left project grid">
            {funItems.map((item) => (
              <Col key={item.title} xs={12} sm={6} md={6} lg={4} xl={4}>
                <div className="project-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default Fun;
