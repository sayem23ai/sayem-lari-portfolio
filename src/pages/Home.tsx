import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { Panel, Badge, Button } from "../components/ui";
export default function Home() {
  return (
    <div className="home">
      <div className="system-line">
        <span>
          <span className="status-led" /> PORTFOLIO SYSTEM / ONLINE
        </span>
        <span>
          PLAYER 01 <span className="muted">—</span> SAYEM LARI
        </span>
      </div>
      <div className="hero-grid">
        <section className="hero">
          <div className="eyebrow">
            <span className="small-square" /> PLAYER PROFILE
          </div>
          <h1>
            MOHD.
            <br />
            SAYEM{" "}
            <span className="accent">
              LARI<span className="cursor">_</span>
            </span>
          </h1>
          <h2>
            Full-Stack Developer<span className="slash"> / </span>
            <span className="purple-text">AI/ML Enthusiast</span>
          </h2>
          <p className="hero-copy">
            Building practical software, intelligent systems,
            <br className="desktop-break" /> and interactive web experiences.
          </p>
          <div className="degree">
            B.Tech CSE — Artificial Intelligence & Machine Learning
          </div>
          <div className="hero-actions">
            <Button to="/projects">VIEW PROJECTS</Button>
            <Button to="/resume" secondary>
              VIEW RESUME
            </Button>
          </div>
          <Link to="/contact" className="contact-cta">
            Let’s build something together <ArrowUpRight size={17} />
          </Link>
        </section>
        <Panel className="profile-panel">
          <div className="panel-top">
            <span>DEVELOPER RECORD</span>
            <span className="muted">NO. 001</span>
          </div>
          <div className="profile-main">
            <div className="record-title">
              CODE. BUILD.
              <br />
              <span className="accent">KEEP EVOLVING.</span>
            </div>
            <div className="record-lines">
              <div>
                <span>CLASS</span>
                <strong>Software Developer</strong>
              </div>
              <div>
                <span>SPECIALIZATION</span>
                <strong className="purple-text">
                  Artificial Intelligence & ML
                </strong>
              </div>
              <div>
                <span>BASE</span>
                <strong>PSIT · B.Tech CSE</strong>
              </div>
              <div>
                <span>GRADUATION</span>
                <strong>2029</strong>
              </div>
            </div>
            <div className="quest">
              <div className="eyebrow">
                <span className="status-led yellow-led" /> CURRENT QUEST
              </div>
              <h3>ResNet from Scratch</h3>
              <p>Exploring residual networks with PyTorch.</p>
              <div className="quest-footer">
                <Badge tone="yellow">IN PROGRESS</Badge>
                <Link to="/projects#resnet" aria-label="View ResNet project">
                  <ArrowUpRight size={21} />
                </Link>
              </div>
            </div>
          </div>
          <div className="panel-bottom">
            <span>LEARNING NEVER STOPS</span>
            <span>▰ ▰ ▰ ▱ ▱</span>
          </div>
        </Panel>
      </div>
      <div className="home-divider">
        <span>SELECT YOUR NEXT DESTINATION</span>
        <span>↓</span>
      </div>
      <div className="destination-grid">
        {[
          {
            id: "01",
            icon: Layers,
            title: "Project archive",
            body: "Real problems. Practical builds.",
            to: "/projects",
            label: "EXPLORE PROJECTS",
          },
          {
            id: "02",
            icon: Code2,
            title: "Skills & abilities",
            body: "The tools behind the work.",
            to: "/skills",
            label: "VIEW SKILL SET",
          },
          {
            id: "03",
            icon: Cpu,
            title: "The developer behind it",
            body: "My background and what’s next.",
            to: "/about",
            label: "GET TO KNOW ME",
          },
        ].map((item) => (
          <Link className="destination panel" to={item.to} key={item.id}>
            <div className="destination-top">
              <item.icon size={22} />
              <span>{item.id}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div className="destination-link">
              {item.label}
              <ArrowRight size={17} />
            </div>
          </Link>
        ))}
      </div>
      <div className="home-message">
        <Terminal size={18} />
        <p>
          Open to internships, software development opportunities & freelance
          collaborations.
        </p>
        <Link to="/contact">
          CONTACT ME <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
