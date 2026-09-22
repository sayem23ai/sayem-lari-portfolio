import { Panel, SectionHeader, Badge, Button } from "../components/ui";
import { education } from "../data/education";
export default function About() {
  return (
    <>
      <SectionHeader
        index="01"
        title="Player profile"
        description="A software developer building useful things — and learning how to make them intelligent."
      />
      <div className="about-grid">
        <Panel className="content-panel">
          <div className="eyebrow">THE DEVELOPER BEHIND THE CODE</div>
          <h2>Hi, I’m Mohd. Sayem Lari.</h2>
          <p>
            I’m pursuing B.Tech in Computer Science & Engineering, specializing
            in Artificial Intelligence & Machine Learning at Pranveer Singh
            Institute of Technology.
          </p>
          <p>
            My primary direction is software and full-stack development. I enjoy
            bringing interfaces, application logic and integrations together to
            solve practical problems.
          </p>
          <p>
            Alongside client work and team projects, I’m building deeper AI/ML
            foundations. My current focus is deep learning and implementing the
            ideas from the ResNet research paper in PyTorch.
          </p>
          <div className="tags">
            {[
              "Software Engineering",
              "Machine Learning",
              "Frontend Engineering",
              "Applied AI",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </Panel>
        <Panel className="content-panel">
          <div className="eyebrow">PROFILE RECORD</div>
          <dl className="profile-fields">
            <dt>ROLE</dt>
            <dd>Full-Stack Developer</dd>
            <dt>SPECIALIZATION</dt>
            <dd>Artificial Intelligence & Machine Learning</dd>
            <dt>CURRENT QUEST</dt>
            <dd>Deep Learning + Research Paper Implementation</dd>
            <dt>EXPECTED GRADUATION</dt>
            <dd>2029</dd>
          </dl>
          <Button to="/contact" secondary>
            LET’S CONNECT
          </Button>
        </Panel>
      </div>
      <div className="section-title">
        <span className="eyebrow">EDUCATION LOG</span>
        <h2>Building the foundation</h2>
      </div>
      <div className="education-list">
        {education.map((e) => (
          <Panel className="education-card" key={e.title}>
            <Badge>{e.year}</Badge>
            <div>
              <h3>{e.title}</h3>
              <p>{e.detail}</p>
              {e.institution && <p>{e.institution}</p>}
            </div>
            <div className="education-results">
              {e.results.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </>
  );
}
