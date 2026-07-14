import React from "react";
import "./_experience-timeline.scss";

export interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  location,
  description,
}) => (
  <div className="experience-item">
    <h4>{role}</h4>
    <h5>
      {company} | {location}
    </h5>
    <p>
      <em>{duration}</em>
    </p>
    {Array.isArray(description) ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{description}</p>
    )}
  </div>
);

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="experience-timeline">
    <h2>Technical Experience</h2>
    <ExperienceItem
      role="Full-Stack Software Engineer Intern"
      company="Sachi Health"
      duration="Sept 2025 - Dec 2025"
      location="Columbia Build Lab"
      description={[
        "Built a clinical-trial RAG pipeline that parsed research papers and normalized eligibility, symptom, treatment, and outcome data into PostgreSQL.",
        "Developed human-feedback review workflows for structured RAG outputs, collaborating with engineering and clinical stakeholders to refine extraction quality and HIPAA-aware recommendation requirements.",
        "Shipped 6 React Native and TypeScript visualization screens for MVP testers in collaboration with product design and research teams.",
      ]}
    />
    <ExperienceItem
      role="Solutions Engineering Intern"
      company="Oracle"
      duration="May 2025 - Aug 2025"
      location="Redwood Shores, CA"
      description={[
        "Built AI-assisted Fast Formula workflows in Oracle Fusion HCM to generate, explain, and debug payroll logic, reducing manual troubleshooting by 25%.",
        "Implemented and regression-tested PL/SQL and HCM Fast Formulas for payroll and absence rules across test and enterprise-test environments.",
        "Prototyped 2 low-code AI agents and demonstrated Redwood and HCM AI capabilities to clients, translating adoption feedback into integration fixes and product notes.",
        "Resolved high-priority service-request defects within SLA windows, coordinating fixes and regression validation with development teams.",
      ]}
    />
    <ExperienceItem
      role="Undergraduate Researcher (DAPLab) | Creatures in the TV"
      company="Columbia University"
      duration="Jan 2026 - May 2026"
      location="New York City, NY"
      description={[
        "Engineered an experimental pipeline that converted single RGB images into depth-backed 2D/3D scene graphs for context-aware creature-insertion research.",
        "Extended a multi-model perception workflow combining GroundingDINO, SAM2, and Depth Anything V2, fusing open-vocabulary detections with per-mask depth statistics and camera back-projection into structured scene JSON.",
        "Prototyped depth-aware trajectory generation and isolated failure modes in occlusion, support surfaces, and motion and animation realism.",
        "Improved inference reliability across UDA and MPS via shared device routing, depth caching, and inter-stage model unloading, reducing VRAM pressure and runtime failures on inputs.",
      ]}
    />
    <ExperienceItem
      role="Student Technician"
      company="Columbia University Information Technology"
      duration="Feb 2023 - May 2026"
      location="New York, NY"
      description={[
        "Supported 500+ students and faculty across HyFlex classrooms, diagnosing A/V, workstation, networking, and hybrid-instruction issues to minimize downtime.",
        "Deployed and maintained hybrid instruction systems including interactive displays and wireless presentation systems.",
        "Collaborated on inventory, classroom/server upgrades, and preventive maintenance for campus academic technology operations.",
      ]}
    />
  </section>
);

export default ExperienceTimeline;
