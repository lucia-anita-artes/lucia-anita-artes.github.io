export type PhaseStatus = 'completed' | 'current' | 'locked';

export interface PhaseMetrics {
  followers: string;
  postsPerWeek: string;
}

export interface PhaseThreshold {
  metric: string;
  min: string;
  ideal: string;
}

export interface RoadmapPhase {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  status: PhaseStatus;
  year: string;
  skillLevel: string;
  metrics: PhaseMetrics;
  advanceThreshold: PhaseThreshold | null;
  requirements: { label: string }[];
  focusAreas: { label: string }[];
}

export interface RoadmapData {
  phases: RoadmapPhase[];
}
