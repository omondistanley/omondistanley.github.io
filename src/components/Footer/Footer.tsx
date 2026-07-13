import React from "react";
import "/src/components/Footer/_footer.scss";

const Footer: React.FC = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} Stanley Omondi | Connect on{" "}
      <a href="https://www.linkedin.com/in/stanley-o-723681262/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or{" "}
      <a href="https://github.com/omondistanley" target="_blank" rel="noopener noreferrer">GitHub</a>.
    </p>
  </footer>
);

export default Footer;
