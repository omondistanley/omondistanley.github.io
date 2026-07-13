import React, { useState } from "react";
import { useSpotify } from "../../contexts/SpotifyContext";
import "../ExperienceTimeline/_experience-timeline.scss";
import "../Projects/_projects.scss";

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
};

const TechnicalHighlights: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isPlaying } = useSpotify();
  return (
    <div className="projects-section my-1" style={{ marginBottom: '1.25rem' }}>
      <div
        className={`experience-timeline highlight-grid ${isPlaying ? 'playing' : 'paused'}`}
        style={{ display: 'grid', gap: '1.5rem' }}
      >
        <h2>technical experience:</h2>
        {(
          [
            {
              role: "Fullstack Software Engineer",
              company: "Columbia Build Lab / Sachi Health",
              duration: "Sep 2025 - Dec 2025",
              location: "New York, NY",
              description: [
                "Engineered a clinical-trial RAG pipeline parsing unstructured papers and PCOS literature, normalizing eligibility, symptoms, treatments, and outcomes into structured data for recommendation workflows.",
                "Shipped 6 React Native/TypeScript visualization screens for MVP testers, making complex user health data more actionable and intuitive.",
              ],
            },
            {
              role: "Solutions Engineering Intern",
              company: "Oracle — Customer Success Services",
              duration: "May 2025 - Aug 2025",
              location: "Redwood City, CA",
              description: [
                "Built AI-assisted Fast Formula workflows in Oracle Fusion HCM to generate, explain, and debug payroll logic, reducing manual troubleshooting by 25%.",
                "Prototyped 2 low-code AI agents and demoed Redwood/HCM AI capabilities to clients, translating adoption feedback into integration fixes and product notes.",
              ],
            },
            {
              role: "Undergraduate Research Assistant",
              company: "Columbia University — CITV",
              duration: "Jan 2026 - May 2026",
              location: "New York, NY",
              description: [
                "Investigated context-aware creature insertion by converting RGB scenes into depth maps, object masks, semantic labels, 2D/3D coordinates, and region-aware scene graphs.",
                "Prototyped and evaluated scene-aware path and trajectory generation using depth-/affordance-aware constraints and motion-path workflows.",
              ],
            },
          ] as Experience[]
        ).map((exp, idx) => (
          <React.Fragment key={idx}>
            <div
              className="project-card highlight-card"
              style={{ zIndex: 1 }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered((v) => (v === idx ? null : v))}
            >
              <div className="card-body">
                <h4 style={{ color: 'var(--heading-color)' }}>{exp.role}</h4>
                <h5 style={{ color: 'var(--text-color)' }}>
                  {exp.company} | {exp.location}
                </h5>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <em>{exp.duration}</em>
                </p>
                {hovered === idx && (
                  Array.isArray(exp.description) ? (
                    <ul style={{ paddingLeft: '1rem', listStyle: 'none', marginBottom: 0 }}>
                      {exp.description.map((d, i) => (
                        <li key={i} style={{ position: 'relative', paddingLeft: '0.75rem', marginBottom: '0.25rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--heading-color)' }}>{'>'}</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )
                )}
              </div>
            </div>

            {idx === 0 && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  href="/technical"
                  className="btn-gradient cta-extracurricular-btn"
                  style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}
                >
                  View Technical Experience <i className="fa fa-arrow-right blink-arrow"></i>
                </a>
              </div>
            )}

            {idx === 2 && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  href="/programs-community"
                  className="btn-gradient cta-extracurricular-btn"
                  style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}
                >
                  View Programs & Community <i className="fa fa-arrow-right blink-arrow"></i>
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
;

export default TechnicalHighlights;
