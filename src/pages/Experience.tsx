import { SectionHeader, Button } from "../components/ui";
import ExperienceCard from "../components/ui/ExperienceCard";
import { experience } from "../data/experience";
export default function Experience() {
  return (
    <>
      <SectionHeader
        index="04"
        title="Experience log"
        description="Real client work. End-to-end responsibility. Software made for people to use."
      />
      {experience.map((e) => (
        <ExperienceCard item={e} key={e.company} />
      ))}
      <div className="opportunity-panel">
        <div>
          <h2>Have a website in mind?</h2>
          <p>
            I’m open to freelance web development and software development
            opportunities.
          </p>
        </div>
        <Button to="/contact">START A CONVERSATION</Button>
      </div>
    </>
  );
}
