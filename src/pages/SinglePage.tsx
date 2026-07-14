import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/HeroSection";
import AboutMe from "../components/AboutMe/AboutMe";
import ExperienceTimeline from "../components/ExperienceTimeline/ExperienceTimeline";
import ProgramsCommunityContent from "../components/ExtraExperience/ExtraExperience";
import ProjectsShowcase from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import "./SinglePage.scss";

const SinglePage: React.FC = () => (
  <div className="app-container single-page-mode">
    <CustomNavbar />
    <div className="navbar-spacer" aria-hidden />
    <Hero />
    <main className="single-page-content">
      <AboutMe />
      <ExperienceTimeline />
      <ProgramsCommunityContent />
      <ProjectsShowcase />
      <section className="single-page-note">
        <h2>Quests</h2>
        <p>
          A lighter section for art, sketches, graphics experiments, food notes, music, and visual ideas that sit outside the strict project archive.
        </p>
        <a href="/fun" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: "none" }}>
          Open Quests <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </section>
    </main>
    <Footer />
  </div>
);

export default SinglePage;
