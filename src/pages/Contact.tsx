import { Mail, Github, Linkedin } from "lucide-react";
import { Panel, SectionHeader } from "../components/ui";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <>
      <SectionHeader
        index="07"
        title="Communication terminal"
        description="Have an opportunity, a project, or an idea? Let’s talk."
      />
      <div className="contact-grid">
        <Panel>
          <ContactForm />
        </Panel>
        <div>
          <Panel className="content-panel">
            <div className="eyebrow">DIRECT CHANNELS</div>
            <h2>Let’s connect.</h2>
            <p>
              Open to internships, software development roles and freelance web
              projects.
            </p>
            <div className="contact-channels">
              <a href="mailto:2k25aiml2512104@gmail.com">
                <Mail size={20} />
                <div>
                  <span>EMAIL</span>
                  <strong>2k25aiml2512104@gmail.com</strong>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sayem-lari-966862396"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <div>
                  <span>LINKEDIN ↗</span>
                  <strong>Sayem Lari</strong>
                </div>
              </a>
              <a
                href="https://github.com/sayem23ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <div>
                  <span>GITHUB ↗</span>
                  <strong>@sayem23ai</strong>
                </div>
              </a>
            </div>
          </Panel>
          <p className="small-note contact-note">
            Your message is a good place to share the scope, timeline and what
            you’d like to build.
          </p>
        </div>
      </div>
    </>
  );
}
