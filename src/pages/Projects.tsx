import { SectionHeader } from "../components/ui";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
export default function Projects() {
  return (
    <>
      <SectionHeader
        index="03"
        title="Project archive"
        description="From disaster intelligence to healthcare and deep learning. A record of what I’ve built, contributed to, and am exploring next."
      />
      <div className="archive-bar">
        <span>4 PROJECT RECORDS</span>
        <span>SOFTWARE × APPLIED AI</span>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.id} />
        ))}
      </div>
    </>
  );
}
