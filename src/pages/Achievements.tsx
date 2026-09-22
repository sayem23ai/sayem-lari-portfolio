import { SectionHeader } from "../components/ui";
import AchievementBadge from "../components/ui/AchievementBadge";
import { achievements } from "../data/achievements";
export default function Achievements() {
  return (
    <>
      <SectionHeader
        index="05"
        title="Milestone badges"
        description="Recognitions along the way. Each one is a reason to keep learning and building."
      />
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <AchievementBadge key={a.id} achievement={a} index={i} />
        ))}
      </div>
    </>
  );
}
