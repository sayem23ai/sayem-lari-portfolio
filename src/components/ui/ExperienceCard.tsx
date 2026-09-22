import { Check, ExternalLink as LinkIcon } from "lucide-react";
import { Panel, Badge, ExternalLink } from "./index";
import type { experience } from "../../data/experience";
export default function ExperienceCard({
  item,
}: {
  item: (typeof experience)[number];
}) {
  return (
    <Panel className="experience-card">
      <div className="experience-aside">
        <LinkIcon size={28} />
        <Badge>{item.type}</Badge>
        <span className="field-label">COMPLETE PROJECT OWNERSHIP</span>
      </div>
      <div>
        <h2>{item.title}</h2>
        <h3 className="accent">{item.company}</h3>
        <p>{item.description}</p>
        <ul className="check-list">
          {item.responsibilities.map((r) => (
            <li key={r}>
              <Check size={17} />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="small-note">{item.note}</p>
        <ExternalLink href={item.url}>VISIT WEBSITE</ExternalLink>
      </div>
    </Panel>
  );
}
