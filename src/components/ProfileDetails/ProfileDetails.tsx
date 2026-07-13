import React from "react";
import { Button } from "react-bootstrap";
import { trackEvent } from "../../utils/analytics";
import "/src/components/ProfileDetails/_profile-details.scss";

const ProfileDetails: React.FC = () => {
  // Event handlers for Google Analytics
  const handleDownloadResume = () => {
    trackEvent({
      category: "Resume",
      action: "Downloaded Resume",
      label: "Download Resume Button",
    });
  };

  const handleMessageMe = () => {
    trackEvent({
      category: "Contact",
      action: "Clicked Message Me",
      label: "Message Me Button",
    });
  };

  const handleGitHub = () => {
    trackEvent({
      category: "Contact",
      action: "Clicked GitHub",
      label: "GitHub Button",
    });
  };

  const handleLinkedIn = () => {
    trackEvent({
      category: "Contact",
      action: "Clicked LinkedIn",
      label: "LinkedIn Button",
    });
  };

  return (
    <div className="hero-content text-left">
      <div className="profile-info">
        <h1>Stanley Omondi</h1>
        <h4>
          CS @ Columbia University | Prev @ Oracle
        </h4>
        <div className="hero-buttons mt-3">
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="/Stanley_Omondi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
          >
            {" "}
            Download Resume
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="mailto:omondistanley.oduor@gmail.com?subject=Hello Stanley!&body=Hi, I visited your website and would like to get in touch!"
            target="_blank"
            onClick={handleMessageMe}
          >
            Contact
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="https://github.com/omondistanley"
            target="_blank"
            onClick={handleGitHub}
          >
            GitHub
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-gradient"
            href="https://www.linkedin.com/in/stanley-o-723681262/"
            target="_blank"
            onClick={handleLinkedIn}
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
