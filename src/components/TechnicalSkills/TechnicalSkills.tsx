import React from "react";
import "./_technical-skills.scss";

const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Languages",
    skills: ["Python", "Bash", "Java", "C/C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["NumPy", "pandas", "scikit-learn", "PyTorch", "TorchVision", "Transformers", "RAG", "PEFT/LoRA", "vLLM"],
  },
  {
    title: "Backend, Data & Applications",
    skills: ["FastAPI", "REST APIs", "PostgreSQL", "MySQL", "Redis", "React Native", "Docker", "GCP"],
  },
  {
    title: "ML Systems & Developer Tools",
    skills: ["CUDA", "Linux", "Git", "GitHub Actions", "W&B", "tmux", "Claude Code"],
  },
];

const TechnicalSkills: React.FC = () => (
  <section id="technical-skills" className="technical-skills my-1">
    <h2>Technical Skills</h2>
    <div className="skills-groups">
      {skillGroups.map((group) => (
        <div key={group.title} className="skills-group">
          <h4>{group.title}</h4>
          <div className="skills-tags">
            {group.skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechnicalSkills;
