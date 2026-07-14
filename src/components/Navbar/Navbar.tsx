import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./_navbar.scss";
import { useSpotify } from "../../contexts/SpotifyContext";
import { usePortfolioMode } from "../../contexts/PortfolioModeContext";

interface NavItem {
  path: string;
  label: string;
  extraActive?: string[];
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Who Am I?" },
  { path: "/technical", label: "Technical" },
  { path: "/coursework", label: "Coursework" },
  { path: "/projects", label: "Projects" },
  { path: "/programs-community", label: "Programs & Community", extraActive: ["/extra-experience"] },
  { path: "/fun", label: "Quests" },
  { path: "/single-page", label: "Single Page" },
];

const CustomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, toggleMode } = usePortfolioMode();

  const isActive = (path: string) => location.pathname === path;

  // Prefer dark mode but respect user's stored theme preference
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Spotify state for brand animation
  const { isPlaying } = useSpotify();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Wiggle effect on brand click
  const brandRef = useRef<HTMLButtonElement | null>(null);
  const handleBrandClick = () => {
    if (!isPlaying && brandRef.current) {
      brandRef.current.classList.remove("wiggle-once");
      void brandRef.current.offsetWidth;
      brandRef.current.classList.add("wiggle-once");
    }
    handleNavigation("/");
  };

  return (
    <nav className="custom-navbar" aria-label="Primary navigation">
      <button
        className={`navbar-brand vinyl-disk ${isPlaying ? "playing" : ""}`}
        onClick={handleBrandClick}
        aria-label="Home"
        style={{ border: "none", background: "transparent", padding: 0 }}
        ref={brandRef}
      >
        {isPlaying ? (
          <img
            src={theme === "light" ? "/brand/vinyl-light.svg" : "/brand/vinyl-dark.svg"}
            alt="Vinyl logo"
            width={40}
            height={40}
            className={`brand-logo ${isPlaying ? "playing" : ""}`}
            decoding="async"
            loading="eager"
          />
        ) : (
          <picture>
            <source srcSet="/portfolio-logo.webp" type="image/webp" />
            <img
              src="/portfolio-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="brand-logo"
              decoding="async"
              loading="eager"
            />
          </picture>
        )}
        <span className="sr-only">Stanley Oduor</span>
      </button>

      <div className="navbar-links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.path}
            className={`nav-link btn-gradient ${
              isActive(item.path) || item.extraActive?.some(isActive) ? "active" : ""
            }`}
            onClick={() => handleNavigation(item.path)}
            style={{ border: "none" }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="navbar-actions">
        <div className="theme-switch-container">
          <button
            type="button"
            className="btn-gradient theme-toggle"
            aria-label={mode === "modern" ? "Switch to retro systems mode" : "Switch to modern portfolio mode"}
            title={mode === "modern" ? "Retro systems mode" : "Modern portfolio mode"}
            onClick={toggleMode}
          >
            {mode === "modern" ? "Retro" : "Modern"}
          </button>
        </div>
        <div className="theme-switch-container">
          <button
            type="button"
            className="btn-gradient theme-toggle icon-only"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Light theme" : "Dark theme"}
            onClick={handleThemeToggle}
          >
            <i className={`fa ${theme === "dark" ? "fa-moon" : "fa-sun"}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
