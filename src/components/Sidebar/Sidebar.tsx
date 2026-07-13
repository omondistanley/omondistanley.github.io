import React from "react";
import { Card } from "react-bootstrap";
import "./_sidebar.scss";

interface SidebarProps {
  className?: string;
  maxHeightPx?: number;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "", maxHeightPx }) => {
  return (
    <div
      className={`sidebar ${className}`}
      style={
        className.includes("active") && maxHeightPx
          ? { height: `${maxHeightPx}px`, maxHeight: `${maxHeightPx}px` }
          : undefined
      }
    >
      <Card className="sidebar-card">
      <Card.Body>
        <Card.Title>Technical Skills</Card.Title>
        <ul className="skills-list">
          <li>
            <strong>AI/ML: </strong>
            <span>
              PyTorch, TorchVision, Hugging Face Transformers, PEFT/LoRA, RAG, NLP, LLM evaluation, model distillation, MoE, CNNs
            </span>
          </li>
          <li>
            <strong>Vision & Graphics: </strong>
            <span>
              OpenCV, SAM2, GroundingDINO, depth estimation, scene graphs, neural rendering, ray tracing, CUDA fundamentals
            </span>
          </li>
          <li>
            <strong>Languages: </strong>
            <span>
              Python, Java, C, C++, SQL, TypeScript, JavaScript, HTML/CSS
            </span>
          </li>
          <li>
            <strong>Frameworks: </strong>
            <span>
              React, React Native, FastAPI, Node.js, Express, Flask, Pydantic, Expo
            </span>
          </li>
          <li>
            <strong>Data & Backend: </strong>
            <span>PostgreSQL, MySQL, Redis, SQLAlchemy, REST APIs, WebSockets, JWT, Plaid-style workflows</span>
          </li>
          <li>
            <strong>Tools: </strong>
            <span>
              Docker, GitHub Actions, Google Cloud, OCI familiarity, Git/GitHub, Linux, sockets, TCP/IP, HTTP
            </span>
          </li>
        </ul>
        <Card.Title>Course Highlights</Card.Title>
        <ul className="course-highlight">
          <li>
            <strong>Computer Science:</strong>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Natural Language Processing</li>
              <li>High Performance Machine Learning</li>
              <li>Neural Rendering / Computer Graphics</li>
              <li>Cloud Computing</li>
              <li>Engineering Software-as-a-Service</li>
              <li>Database Systems</li>
              <li>User Interface Design</li>
              <li>Full-Stack Web Development</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </li>
          <li>
            <strong>Honors:</strong>
            <ul>
              <li>Science Research Fellow, Columbia University</li>
              <li>Matt Pincus Scholarship Fund</li>
              <li>Equity Leadership Scholar</li>
            </ul>
          </li>
        </ul>
      </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;
