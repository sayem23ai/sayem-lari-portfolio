import { SectionHeader } from "../components/ui";
import SkillPanel from "../components/ui/SkillPanel";
import { skills } from "../data/skills";
export default function Skills() {
  return (
    <>
      <SectionHeader
        index="02"
        title="Skills & abilities"
        description="A practical toolkit for software development, with an expanding focus on AI and machine learning."
      />
      <div className="skills-grid">
        {skills.map((group, i) => (
          <SkillPanel key={group.title} group={group} index={i} />
        ))}
      </div>
      <p className="page-note">
        Skills are grouped by hands-on familiarity. The learning continues with
        every build.
      </p>
    </>
  );
}
