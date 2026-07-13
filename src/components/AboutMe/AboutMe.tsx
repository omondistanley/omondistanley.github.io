import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="my-3 about-me">
      <div className="about-content">
      <h2>hi!</h2>
      <p>i build ai products, research prototypes, and systems that turn messy inputs into structured software.</p>

      <p>right now, my strongest work sits across <strong>roam</strong>, <strong>pocketii</strong>, <strong>citv</strong>, <strong>mistralmoe</strong>, and <strong>neural rendering</strong> — product systems, visual computing, and efficient ai research.</p>
      <div style={{ margin: '0.5rem 0 0.75rem' }}>
        <a href="/projects" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}>
          See what i'm building <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>

      <p>professionally, i've worked on enterprise ai agents at <strong>oracle</strong>, clinical-trial rag and mobile visualizations at <strong>sachi health</strong> through columbia build lab, and classroom technology systems at columbia uit.</p>
      <p><b>big picture:</b> closing the gap between impressive ai demos and dependable ai systems.</p>
      <p>a model that works 60% of the time is a demo. 95%+ is a product.</p>

      <h5>stuff i work on:</h5>
      <ul>
        <li>llm pipelines, rag, and structured output</li>
        <li>computer vision, graphics, and neural rendering</li>
        <li>full-stack, mobile, and backend systems</li>
        <li>efficient ai systems, moe, and distillation</li>
      </ul>

      <h5>stuff i've been doing:</h5>
      <ul>
        <li>building scene-aware visual computing systems through citv research</li>
        <li>shipping real product infrastructure through roam and pocketii</li>
        <li>studying model efficiency through mistralmoe and high-performance ml</li>
      </ul>

      <p>outside the technical work, i also want this site to hold the fun stuff — art, visual experiments, food, music, and ideas that don't fit neatly into a resume.</p>
      </div>
    </section>
  );
};

export default AboutMe;
