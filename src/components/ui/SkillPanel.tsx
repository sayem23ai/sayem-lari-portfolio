import { Panel, Badge } from "./index";
import { Code2, Wrench, BookOpen } from "lucide-react";
import type { skills } from "../../data/skills";
const icons = [Code2, Wrench, BookOpen];
export default function SkillPanel({
  group,
  index,
}: {
  group: (typeof skills)[number];
  index: number;
}) {
  const Icon = icons[index];
  return (
    <Panel className={`skill-panel ${group.tone}`}>
      <div className="skill-panel-head">
        <Icon size={26} />
        <span className="field-label">ABILITY SET / 0{index + 1}</span>
      </div>
      <h2>{group.title}</h2>
      <p>{group.description}</p>
      <div className="skill-list">
        {group.items.map((s, i) => (
          <div key={s}>
            <span className="skill-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <strong>{s}</strong>
            <span className="skill-slot" aria-hidden="true">
              ▪
            </span>
          </div>
        ))}
      </div>
      <Badge tone={group.tone}>{group.title.toUpperCase()}</Badge>
    </Panel>
  );
}
