import { Github, Linkedin, Mail } from "lucide-react";
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/sayem23ai" aria-label="GitHub">
        <Github size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/sayem-lari-966862396"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <a href="mailto:2k25aiml2512104@gmail.com" aria-label="Email">
        <Mail size={18} />
      </a>
    </div>
  );
}
export default function Footer() {
  return (
    <footer>
      <div>
        <strong>Mohd. Sayem Lari</strong>
        <p>Full-Stack Developer & AI/ML Enthusiast</p>
      </div>
      <span className="footer-note">
        Built with React, TypeScript and curiosity.
      </span>
      <SocialLinks />
    </footer>
  );
}
