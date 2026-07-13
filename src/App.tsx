import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import { Row, Col } from "react-bootstrap";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import TechnicalHighlights from "./components/Highlights/TechnicalHighlights";
import FeaturedProjects from "./components/Projects/FeaturedProjects";
const Highlights = React.lazy(() => import("./pages/Highlights"));
const ProgramsCommunity = React.lazy(() => import("./pages/ProgramsCommunity"));
const ProjectsPage = React.lazy(() => import("./pages/Projects"));
const TechnicalExperiencePage = React.lazy(() => import("./pages/Technical"));
const Fun = React.lazy(() => import("./pages/Fun"));
const SinglePage = React.lazy(() => import("./pages/SinglePage"));
import { SpotifyProvider } from "./contexts/SpotifyContext";
import { PortfolioModeProvider } from "./contexts/PortfolioModeContext";
import "./styles/main.scss";

// Defer Google Analytics to after mount to keep it out of the initial bundle
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
const useDeferredAnalytics = () => {
  useEffect(() => {
    if (!googleAnalyticsKey) return;
    // Dynamically import so GA is not part of the initial JS payload
    import("react-ga4").then((mod) => {
      const ReactGA = mod.default || mod;
      ReactGA.initialize(googleAnalyticsKey);
    }).catch(() => {
      // no-op on failure
    });
  }, []);
};

// Main portfolio component
const MainPortfolio: React.FC = () => {
  return (
    <>
      <CustomNavbar />
      {/* Keep spacer with the scrollable content */}
      <div className="app-container">
        <div className="navbar-spacer" aria-hidden />
        <Hero />
        <hr className="hero-about-divider" aria-hidden />
        <div className="content-container">
          <Layout>
            <Row className="g-3 align-items-stretch">
              <Col xs={12} lg={6}>
                <AboutMe />
              </Col>
              <Col xs={12} lg={6}>
                <TechnicalHighlights />
              </Col>
            </Row>
            <FeaturedProjects />
            <div
              className="cta-row"
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                justifyContent: 'center',
              }}
            >
              <a href="/projects" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}>
                View all projects <i className="fa fa-arrow-right blink-arrow"></i>
              </a>
            </div>
          </Layout>
        </div>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  useDeferredAnalytics();
  return (
    <SpotifyProvider>
      <PortfolioModeProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/technical" element={<TechnicalExperiencePage />} />
          <Route path="/programs-community" element={<ProgramsCommunity />} />
          <Route path="/extra-experience" element={<ProgramsCommunity />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/single-page" element={<SinglePage />} />
          <Route path="/highlights" element={<Highlights />} />
        </Routes>
      </Suspense>
      </PortfolioModeProvider>
    </SpotifyProvider>
  );
};

export default App;
