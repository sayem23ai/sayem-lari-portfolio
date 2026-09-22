import { Award, ShieldCheck } from "lucide-react";
import { Panel, Badge } from "./index";
import type { achievements } from "../../data/achievements";
export default function AchievementBadge({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[number];
  index: number;
}) {
  const Icon = index === 0 ? Award : ShieldCheck;
  return (
    <Panel className="achievement-card">
      <div className={`achievement-icon ${achievement.tone}`}>
        <Icon size={60} strokeWidth={1.3} />
      </div>
      <div className="field-label">RECOGNITION / {achievement.id}</div>
      <h2>{achievement.name}</h2>
      <Badge tone={achievement.tone}>{achievement.status.toUpperCase()}</Badge>
    </Panel>
  );
}
