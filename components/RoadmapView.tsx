'use client';

import RoadmapPhaseCard from '@/components/RoadmapPhaseCard';
import { useDashboard } from '@/components/DashboardProvider';

export default function RoadmapView() {
  const { roadmapData } = useDashboard();

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-amber-400 mb-1">
          Jornada Artística
        </h1>
        <p className="text-sm text-zinc-500">
          Clique em cada fase para ver características e o que focar
        </p>
      </div>

      <div>
        {roadmapData.phases.map((phase, index) => (
          <RoadmapPhaseCard
            key={phase.id}
            phase={phase}
            isLast={index === roadmapData.phases.length - 1}
          />
        ))}
      </div>
    </main>
  );
}
