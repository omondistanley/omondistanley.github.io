import React from "react";
import { Card } from "react-bootstrap";
import "./_sidebar.scss";

interface SidebarSpotifyOnlyProps {
  className?: string;
}

// Spotify embed removed for this fork; kept as a slim sidebar card so the
// layout matches the original format on sub-pages.
const SidebarSpotifyOnly: React.FC<SidebarSpotifyOnlyProps> = ({ className = "" }) => {
  return (
    <div className={`sidebar ${className}`}>
      <Card className="sidebar-card">
        <Card.Body>
          <Card.Title>Currently</Card.Title>
          <ul className="skills-list">
            <li>
              <span>
                CS @ Columbia University (class of 2026), researching
                vision-language pipelines and building AI products.
              </span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SidebarSpotifyOnly;
