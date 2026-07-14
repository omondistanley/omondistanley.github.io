import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProgramsCommunityContent from "../components/ExtraExperience/ExtraExperience";
import Layout from "../components/Layouts/Layout";

const ProgramsCommunity: React.FC = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <Layout sidebarVariant="spotifyOnly">
        <ProgramsCommunityContent />
      </Layout>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", margin: "0.75rem 0 1rem", flexWrap: "wrap" }}>
        <a href="/fun" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif' }}>
          View Quests <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
        <a href="/highlights" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif' }}>
          View GitHub Stats <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramsCommunity;
