import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string;
    github?: string;
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
      {isFeatured && links.live && (
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
    name: "MistralMoE",
    technologies:
      "Python, PyTorch, Transformers, PEFT/LoRA, W&B, MoE Evaluation",
    date: "2026",
    description:
      "Knowledge distillation and sparse-upcycling research for Mixture-of-Experts language models. Upcycled a 7B dense model into a sparse MoE using pretrained experts, LoRA, and distillation, with experiments reporting up to +3.0 MMLU points, 65.6% FLOPs reduction, and 2.85x throughput improvements.",
    links: {
      github: "https://github.com/omondistanley/MistralMoE",
    },
    isFeatured: true,
  },
  {
    name: "Neural Volume Rendering + Transfer Learning",
    technologies:
      "Python, PyTorch, Neural Rendering, NeRFs, 3D Reconstruction, Transfer Learning",
    date: "2026",
    description:
      "Graphics/ML project exploring neural scene representation, volume rendering, and transfer-learning workflows for 3D reconstruction. This sits directly beside my visual-computing interests in CITV, ray tracing, and computer graphics.",
    links: {
      github: "https://github.com/omondistanley/Nerfs-and-transfer-learning",
    },
  },
  {
    name: "Neural Volume Rendering",
    technologies:
      "Python, PyTorch, Differentiable Rendering, Camera Geometry, Volumetric Scenes",
    date: "2026",
    description:
      "Companion neural rendering implementation focused on camera rays, volumetric accumulation, and differentiable graphics concepts. Included as a deeper proof point for graphics/ML roles and research-engineering storytelling.",
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
    name: "Ray Tracer / Computer Graphics",
    technologies:
      "C++, Ray Tracing, Phong Shading, BVH, TriMesh, Geometry",
    date: "2025",
    description:
      "Low-level graphics project implementing camera rays, sphere/triangle intersections, Phong shading, acceleration structures, and mesh rendering. Important proof of graphics fundamentals behind my computer vision and neural rendering interests.",
    links: {
      github: "https://github.com/omondistanley/ComputerGraphics",
    },
  },
  {
    name: "CUDA + High Performance ML Labs",
    technologies:
      "CUDA, C/C++, Python, GPU Programming, Parallel Computing, Performance Analysis",
    date: "2026",
    description:
      "GPU programming and high-performance machine learning work focused on kernels, memory behavior, parallel execution, and the systems layer underneath ML workloads. This supports my interest in efficient AI systems, not just model usage.",
    links: {
      github: "https://github.com/omondistanley/cuda_learning",
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
    },
  },
  {
    name: "HTTP Client/Server + TCP Lookup",
    technologies: "C, POSIX Sockets, HTTP/1.0, HTTP/1.1, TCP/IP, Systems Programming",
    date: "2024",
    description:
      "Systems programming project implementing an HTTP client/server and persistent backend TCP lookup service. Includes request validation, error handling, logging, and networking fundamentals that show comfort below the web-framework layer.",
    links: {
      github: "https://github.com/omondistanley/HTTP-server-and-client-programming",
    },
  },
  {
    name: "Expense Tracker Microservices",
    technologies: "Python, FastAPI, MySQL, REST, HATEOAS, Google Cloud",
    date: "2024",
    description:
      "Microservices project with RESTful user, budget, and expense services, pagination, HATEOAS links, and cloud deployment. A strong early backend systems project that later informed the architecture of Pocketii.",
    links: {
      github: "https://github.com/omondistanley/user-microservice",
    },
  },
  {
    name: "Anchorpoint",
    technologies: "TypeScript, React, Product Engineering, Web App Architecture",
    date: "2026",
    description:
      "Product-oriented web application work focused on building a clear user experience around structured workflows. Included as a supporting product-engineering artifact alongside larger AI and systems projects.",
    links: {
      github: "https://github.com/omondistanley/anchorpoint",
    },
  },
  {
    name: "CNN / Residual Networks Exploration",
    technologies: "Python, PyTorch, CNNs, Residual Networks, Model Training",
    date: "2026",
    description:
      "Smaller ML labs exploring convolutional networks, residual connections, and training behavior. These are supporting projects rather than homepage features, but they reinforce the ML fundamentals behind the larger research projects.",
    links: {
      github: "https://github.com/omondistanley/residual-networks",
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
