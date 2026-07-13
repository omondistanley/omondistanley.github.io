import React from "react";
import "../ExperienceTimeline/_experience-timeline.scss";

interface ExperienceProps {
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
}) => {
  const expanded = true;

  return (
    <div className={`experience-item ${expanded ? "expanded" : ""}`}>
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
};

const ProgramsCommunity: React.FC = () => {
  return (
    <section id="programs-community" className="experience-timeline">
      <h2 id="programs-community-heading">Programs & Community</h2>
      <>
        <ExperienceItem
          role="Member"
          company="ColorStack"
          duration="Feb 2023 - Present"
          location="Remote"
          description={[
            "Part of a national community for Black and Latinx computer science students and early-career technologists.",
            "Engaged with career programming, technical community, and peer networks while developing a stronger software engineering foundation.",
          ]}
        />
        <ExperienceItem
          role="Student"
          company="CodePath"
          duration="May 2024 - Aug 2024"
          location="Remote"
          description={[
            "Completed technical programming through CodePath, strengthening software engineering, interview preparation, and project-based development skills.",
          ]}
        />
        <ExperienceItem
          role="Tech Developer First Year Academy"
          company="SEO (Sponsors for Educational Opportunity)"
          duration="Mar 2023 - Sep 2023"
          location="Remote"
          description={[
            "Mastered advanced Python programming, data structures, algorithms, and software engineering fundamentals in an autonomous, project-based technical environment.",
            "Built habits around rigorous development workflows, debugging, time management, and complex problem-solving with a cohort of developers.",
          ]}
        />
        <ExperienceItem
          role="PwC Remote Extern"
          company="Paragon One / PwC"
          duration="May 2023 - Jul 2023"
          location="Remote"
          description={[
            "Worked in a consulting-style cohort with PwC to research and recommend improvements for alumni relations and engagement strategy.",
            "Practiced strategic analysis, problem framing, and recommendation-building using consulting frameworks.",
          ]}
        />
        <ExperienceItem
          role="Virtual Insight Series"
          company="Goldman Sachs"
          duration="May 2023 - Jun 2023"
          location="Remote"
          description={[
            "Participated in professional development programming focused on finance, organizational skills, and early-career exposure to the financial services industry.",
          ]}
        />
        <ExperienceItem
          role="College Counseling Mentor"
          company="Equity Bank Limited"
          duration="May 2022 - Dec 2022"
          location="Nairobi County, Kenya"
          description={[
            "Mentored students through college counseling, presentation preparation, and academic planning after completing the Equity Leadership pathway.",
          ]}
        />
        <ExperienceItem
          role="Science Research Fellows Program"
          company="Columbia University"
          duration="Apr 2022"
          location="New York, NY"
          description={[
            "Selected as part of Columbia's Science Research Fellows Program through the Columbia Undergraduate Scholars Program for students with strong interest in science and research.",
          ]}
        />
        <ExperienceItem
          role="Matt Pincus Scholarship Fund"
          company="Columbia University"
          duration="Jan 2024"
          location="New York, NY"
          description={[
            "Recognized through Columbia University scholarship support tied to academic achievement and undergraduate promise.",
          ]}
        />
        <ExperienceItem
          role="Equity Leadership Scholar"
          company="Equity Group Foundation"
          duration="Jul 2021"
          location="Kenya"
          description={[
            "Selected for the Equity Leadership Scholar pathway after strong academic performance and leadership potential.",
          ]}
        />
      </>
    </section>
  );
};

export default ProgramsCommunity;
