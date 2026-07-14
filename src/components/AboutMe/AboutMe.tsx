import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="my-3 about-me">
      <div className="about-content">
      <p className="about-path">~/home</p>
      <h2 className="about-tagline">From ambiguous problems to shipped solutions.</h2>
      <div className="about-tags">
        <span className="about-tag">Software</span>
        <span className="about-tag">Data</span>
        <span className="about-tag">Product</span>
        <span className="about-tag">AI/ML</span>
      </div>
      <p className="about-focus">Computer Science @ Columbia University. 2026 Grad. Focus: AI/ML &amp; HCI.</p>
      <p>I've worked as a Solutions Engineering Intern at <strong>Oracle</strong> and a Full-Stack Software Engineer at <strong>Sachi Health</strong>. I'm currently building <strong>Roam</strong> and <strong>Pocketii</strong>.</p>
      <div style={{ margin: '0.5rem 0 0.75rem' }}>
        <a href="/projects" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}>
          See what I'm building <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>

      <p>I enjoy photography, food, cooking, a good meme, and music (still bad at it).</p>
      </div>
    </section>
  );
};

export default AboutMe;
