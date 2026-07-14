import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string;
    testflight?: string;
    github?: string;
    paper?: string;
  };
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  date,
  description,
  links,
  isFeatured,
}) => (
  <div className="project-card">
    <h3>{name}</h3>
    <p>
      <strong>Technologies:</strong> {technologies}
    </p>
    <p>
      <strong>Date:</strong> <span className="project-date">{date}</span>
    </p>
    <p>{description}</p>
    <div className={`links ${isFeatured ? "featured-links" : ""}`}>
      {links.live && (
        <Button
          variant="outline-secondary"
          className="btn-gradient live-button"
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </Button>
      )}
      {links.testflight && (
        <Button
          variant="outline-secondary"
          className="btn-gradient testflight-button"
          href={links.testflight}
          target="_blank"
          rel="noopener noreferrer"
        >
          TestFlight
        </Button>
      )}
      {links.paper && (
        <Button
          variant="outline-secondary"
          className="btn-gradient paper-button"
          href={links.paper}
          target="_blank"
          rel="noopener noreferrer"
        >
          Paper
        </Button>
      )}
      {links.github && (
        <Button
          variant="outline-secondary"
          className="btn-gradient github-button"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      )}
    </div>
  </div>
);

export const projects = [
  {
    name: "Roam",
    technologies:
      "Swift, AVAssetImageGenerator, Vision LLMs, FastAPI, PostgreSQL, Google Maps API",
    date: "2025 - Present",
    description:
      "AI-powered travel and social-planning system that converts short-form video inspiration into structured planning data. Built iOS reel/video ingestion with frame extraction, confidence-scored location/activity extraction, Google Maps place resolution, and FastAPI/PostgreSQL storage for recommendations, shared maps, and calendar-aware planning.",
    links: {
      github: "https://github.com/omondistanley/roam-mvp",
      live: "https://roam-alpha.web.app/",
      testflight: "https://testflight.apple.com/join/CHpUX4F4",
    },
    isFeatured: true,
  },
  {
    name: "Pocketii",
    technologies:
      "Python, FastAPI, PostgreSQL, Redis, Docker, JWT, Background Jobs",
    date: "2024 - 2026",
    description:
      "Personal finance platform centered on reliable transaction integration: authenticated API connections, idempotent ingestion, provider failover, background processing, and secure storage. The product turns fragmented financial activity into structured budget, spending, and decision-support workflows.",
    links: {
      github: "https://github.com/omondistanley/pocketii",
      live: "https://pocketii.onrender.com/demo",
    },
    isFeatured: true,
  },
  {
    name: "Creatures in the TV / CITV",
    technologies:
      "Python, Computer Vision, Scene Graphs, SAM2, GroundingDINO, Depth Estimation, Motion Planning",
    date: "2026",
    description:
      "Research artifact from Columbia visual-computing work on context-aware creature insertion. Converts RGB scenes into depth maps, object masks, semantic labels, 2D/3D coordinates, and region-aware scene graphs, then explores depth-/affordance-aware path generation for animated agents.",
    links: {
      github: "https://github.com/omondistanley/citv",
    },
    isFeatured: true,
  },
  {
    name: "Knowledge Distillation for Scalable Mixture-of-Expert Models",
    technologies:
      "Python, PyTorch, Transformers, PEFT/LoRA, W&B, MoE Evaluation",
    date: "2026",
    description:
      "Knowledge distillation and sparse-upcycling research for Mixture-of-Experts language models. Upcycled a 7B dense model into a sparse MoE using pretrained experts, LoRA, and distillation, with experiments reporting up to +3.0 MMLU points, 65.6% FLOPs reduction, and 2.85x throughput improvements.",
    links: {
      github: "https://github.com/omondistanley/MistralMoE",
      paper: "https://github.com/omondistanley/MistralMoE/blob/master/MoE%20Final%20Paper.pdf",
    },
    isFeatured: true,
  },
  {
    name: "Neural Volume Rendering",
    technologies:
      "Python, PyTorch, Neural Rendering, NeRFs, Differentiable Rendering, 3D Reconstruction, Transfer Learning",
    date: "2026",
    description:
      "Graphics/ML case study spanning neural scene representation, differentiable volume rendering, camera-ray geometry, and transfer-learning workflows for 3D reconstruction — sitting alongside CITV and my broader visual-computing interests.",
    links: {
      github: "https://github.com/omondistanley/Neural-Volume-Rendering",
    },
  },
  {
    name: "Image Captioning with LSTM",
    technologies:
      "Python, PyTorch, TorchVision, ResNet-18, LSTM, PIL",
    date: "2025",
    description:
      "Computer-vision/NLP system using a pretrained ResNet-18 encoder and conditioned LSTM decoder to generate captions for Flickr8k images. Implemented padding/masking, staged training, and greedy/sampling/beam decoding to connect visual features with natural-language generation.",
    links: {
      github: "https://github.com/omondistanley/Image-captioning-using-LSTM",
    },
  },
  {
    name: "2048 AI Solver",
    technologies: "Python, Search, Expectiminimax, Alpha-Beta Pruning, Heuristic Evaluation",
    date: "2025",
    description:
      "AI decision engine for 2048 using iterative-deepening expectiminimax, probabilistic tile modeling, and heuristic scoring over empty tiles, monotonicity, smoothness, corner placement, and merge potential.",
    links: {
      github: "https://github.com/omondistanley/2048-Puzzle-AI-Agent-Solver",
      live: "https://2048-puzzle-ai-agent-solver.fly.dev/",
    },
  },
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section id="custom-projects" className="projects-section my-1">
      <h2>Projects</h2>
      <Row className="g-4 justify-content-left project grid">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
            <ProjectCard
              key={index}
              {...project}
              isFeatured={project.isFeatured}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProjectsShowcase;
