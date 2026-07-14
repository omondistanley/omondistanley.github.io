import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layouts/Layout";
import "./_coursework.scss";

interface CourseCategory {
  title: string;
  courses: { name: string; grad?: boolean }[];
}

const categories: CourseCategory[] = [
  {
    title: "AI & Machine Learning",
    courses: [
      { name: "Artificial Intelligence" },
      { name: "Introduction to Neural Networks and Deep Learning", grad: true },
      { name: "Projects in Advanced Machine Learning", grad: true },
      { name: "High Performance Machine Learning", grad: true },
      { name: "Natural Language Processing" },
      { name: "Startup Studio: AI-Accelerated Building & Validation" },
    ],
  },
  {
    title: "HCI & Graphics",
    courses: [
      { name: "Human-Centered Design and Innovation" },
      { name: "UI Design" },
      { name: "Neural Rendering / Graphics" },
      { name: "Computer Graphics" },
    ],
  },
  {
    title: "Systems & Engineering",
    courses: [
      { name: "Engineering Software-as-a-Service" },
      { name: "Topics in Database Systems", grad: true },
      { name: "Cloud Computing" },
      { name: "Introduction to Databases" },
      { name: "Fundamentals of Computer Systems Programming" },
      { name: "Development Technology" },
      { name: "Advanced Programming" },
      { name: "Data Structures in Java" },
      { name: "Intro to Computer Science & Programming in Java" },
    ],
  },
  {
    title: "Theory & Foundations",
    courses: [
      { name: "Computer Science Theory" },
      { name: "Discrete Mathematics" },
      { name: "Internet Technology, Economics, and Policy" },
      { name: "Linear Algebra and Probability" },
      { name: "Calculus III" },
      { name: "Calculus II" },
    ],
  },
  {
    title: "Humanities (Core Curriculum)",
    courses: [
      { name: "Contemporary Civilization I & II" },
      { name: "Literature Humanities" },
      { name: "Masterpieces of Western Art" },
      { name: "Music Humanities" },
    ],
  },
];

const Coursework: React.FC = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <Layout sidebarVariant="default">
        <section id="coursework" className="coursework-section my-1">
          <h2>Coursework</h2>
          <p style={{ maxWidth: "760px", margin: "0 auto 1.5rem", textAlign: "center" }}>
            Computer Science coursework at Columbia, focused on AI/ML and HCI.
          </p>
          {categories.map((category) => (
            <div key={category.title} className="course-category">
              <h3>{category.title}</h3>
              <ul>
                {category.courses.map((course) => (
                  <li key={course.name}>
                    {course.name}
                    {course.grad && <span className="grad-tag">grad</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Layout>
      <Footer />
    </div>
  );
};

export default Coursework;
