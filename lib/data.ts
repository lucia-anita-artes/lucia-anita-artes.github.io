import { ProgressData, PaintingSteps, Painting } from '@/types';
import { RoadmapData } from '@/types/roadmap';
import { ProximosPassosData } from '@/types/proximos-passos';
import progressSeed from '@/data/progress.json';
import roadmapSeed from '@/data/roadmap.json';
import actionsSeed from '@/data/proximos-passos.json';

export const TOTAL_STEPS = 7;
export const STORAGE_KEYS = {
  progress: 'lucia_dashboard_progress_v1',
  actions: 'lucia_dashboard_actions_v1',
} as const;

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export function getDefaultProgressData(): ProgressData {
  return deepClone(progressSeed as ProgressData);
}

export function getDefaultRoadmapData(): RoadmapData {
  return deepClone(roadmapSeed as RoadmapData);
}

export function getDefaultActionsData(): ProximosPassosData {
  return deepClone(actionsSeed as ProximosPassosData);
}

export function countCompletedSteps(steps: PaintingSteps): number {
  return Object.values(steps).filter(Boolean).length;
}

export function collectionProgress(paintings: Painting[]): number {
  if (paintings.length === 0) return 0;
  const total = paintings.length * TOTAL_STEPS;
  const done = paintings.reduce((acc, p) => acc + countCompletedSteps(p.steps), 0);
  return done / total;
}
