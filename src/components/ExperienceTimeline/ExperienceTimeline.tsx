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
      role="Fullstack Software Engineer"
      company="Columbia Build Lab / Sachi Health"
      duration="Sep 2025 - Dec 2025"
      location="New York, NY"
      description={[
        "Engineered a clinical-trial RAG pipeline parsing unstructured papers and PCOS literature, normalizing eligibility, symptoms, treatments, and outcomes into structured data for recommendation workflows.",
        "Implemented RLHF-style human-feedback evaluation of extracted outputs to refine RAG result quality for MVP review.",
        "Designed HIPAA-aware recommendation logic using structured trial variables and user inputs/goals.",
        "Shipped 6 React Native/TypeScript visualization screens for MVP testers, making complex user health data more actionable and intuitive.",
      ]}
    />
    <ExperienceItem
      role="Solutions Engineering Intern"
      company="Oracle — Customer Success Services"
      duration="May 2025 - Aug 2025"
      location="Redwood City, CA"
      description={[
        "Built AI-assisted Fast Formula workflows in Oracle Fusion HCM to generate, explain, and debug payroll logic, reducing manual troubleshooting by 25%.",
        "Implemented and regression-tested PL/SQL and HCM Fast Formulas for payroll and absence rules across test and enterprise-test environments.",
        "Prototyped 2 low-code AI agents and demoed Redwood/HCM AI capabilities to clients, translating adoption feedback into integration fixes and product notes.",
        "Reproduced and resolved priority service-request defects and validated patches/workarounds within SLA windows.",
      ]}
    />
    <ExperienceItem
      role="Undergraduate Research Assistant"
      company="Columbia University — Creatures in the TV / CITV"
      duration="Jan 2026 - May 2026"
      location="New York, NY"
      description={[
        "Investigated context-aware creature insertion by converting RGB scenes into depth maps, object masks, semantic labels, 2D/3D coordinates, and region-aware scene graphs.",
        "Prototyped and evaluated scene-aware path and trajectory generation using depth-/affordance-aware constraints and motion-path workflows.",
        "Documented experimental tradeoffs across segmentation, scene understanding, motion constraints, and GPU/CPU/MPS execution for research prototyping.",
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
