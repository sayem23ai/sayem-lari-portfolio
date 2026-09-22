import {
  Github,
  ArrowUpRight,
  ArrowDown,
  Waves,
  ScanLine,
  BrainCircuit,
  Layers,
} from "lucide-react";
import type { Project } from "../../data/projects";
import { Panel, Badge, ExternalLink } from "../ui";
const icons = [Waves, Layers, ScanLine, BrainCircuit];
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = icons[index];
  return (
    <Panel className={`project-card project-${index}`}>
      <article id={project.slug}>
        <div className="project-visual" aria-hidden="true">
          <div className="project-glyph">
            <Icon size={48} strokeWidth={1.2} />
          </div>
          <span className="visual-category">{project.category}</span>
          <span className="visual-id">#{project.id}</span>
          <div className="visual-ticks">+ + + + + + + +</div>
        </div>
        <div className="project-content">
          <div className="card-kicker">
            <span>PROJECT / {project.id}</span>
            <Badge
              tone={
                project.status === "CURRENTLY IMPLEMENTING"
                  ? "yellow"
                  : project.status === "DEPLOYED"
                    ? "green"
                    : "purple"
              }
            >
              {project.status}
            </Badge>
          </div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="role-block">
            <span className="field-label">MY CONTRIBUTION</span>
            <p>{project.role}</p>
          </div>
          <div className="tags" aria-label="Technologies and scope">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <details>
            <summary>
              PROJECT DETAILS <span>+</span>
            </summary>
            <ul>
              {project.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {project.workflow && (
              <ol className="workflow" aria-label="Disaster detection workflow">
                {project.workflow.map((step, i) => (
                  <li key={step}>
                    <span>
                      <span className="step-number">0{i + 1}</span>
                      {step}
                    </span>
                    {i < project.workflow!.length - 1 && (
                      <ArrowDown size={14} aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            )}
          </details>
          <div className="project-links">
            {project.github && (
              <ExternalLink href={project.github}>
                <Github size={15} />
                SOURCE CODE
              </ExternalLink>
            )}
            {project.live && (
              <ExternalLink href={project.live}>LIVE DEMO</ExternalLink>
            )}
            {!project.github && !project.live && (
              <span className="muted text-sm">
                Source code will be added when available.
              </span>
            )}
            <ArrowUpRight
              className="project-corner"
              size={18}
              aria-hidden="true"
            />
          </div>
        </div>
      </article>
    </Panel>
  );
}
