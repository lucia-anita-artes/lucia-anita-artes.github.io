'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  CollectionStatus,
  PaintingStatus,
  PaintingSteps,
  ProgressData,
} from '@/types';
import { ProximosPassosData } from '@/types/proximos-passos';
import { RoadmapData } from '@/types/roadmap';
import {
  getDefaultActionsData,
  getDefaultProgressData,
  getDefaultRoadmapData,
  STORAGE_KEYS,
} from '@/lib/data';

interface DashboardContextValue {
  progressData: ProgressData;
  roadmapData: RoadmapData;
  actionsData: ProximosPassosData;
  hydrated: boolean;
  toggleStep: (args: {
    collectionId: string;
    paintingId: string;
    step: keyof PaintingSteps;
    value: boolean;
  }) => void;
  updateNotes: (args: {
    collectionId: string;
    paintingId: string;
    notes: string;
  }) => void;
  updatePaintingStatus: (args: {
    collectionId: string;
    paintingId: string;
    status: PaintingStatus;
  }) => void;
  updateCollectionStatus: (args: {
    collectionId: string;
    status: CollectionStatus;
  }) => void;
  toggleAction: (args: { actionId: string; value: boolean }) => void;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function readStorageJSON<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export default function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progressData, setProgressData] = useState<ProgressData>(() =>
    getDefaultProgressData()
  );
  const [roadmapData] = useState<RoadmapData>(() => getDefaultRoadmapData());
  const [actionsData, setActionsData] = useState<ProximosPassosData>(() =>
    getDefaultActionsData()
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const storedProgress = readStorageJSON<ProgressData>(STORAGE_KEYS.progress);
      if (storedProgress) setProgressData(storedProgress);

      const storedActions = readStorageJSON<ProximosPassosData>(
        STORAGE_KEYS.actions
      );
      if (storedActions) setActionsData(storedActions);

      setHydrated(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progressData));
  }, [progressData, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEYS.actions, JSON.stringify(actionsData));
  }, [actionsData, hydrated]);

  function toggleStep({
    collectionId,
    paintingId,
    step,
    value,
  }: {
    collectionId: string;
    paintingId: string;
    step: keyof PaintingSteps;
    value: boolean;
  }) {
    setProgressData((current) => {
      const next = deepClone(current);
      const collection = next.collections.find((c) => c.id === collectionId);
      if (!collection) return current;

      const painting = collection.paintings.find((p) => p.id === paintingId);
      if (!painting) return current;

      painting.steps[step] = value;
      return next;
    });
  }

  function updateNotes({
    collectionId,
    paintingId,
    notes,
  }: {
    collectionId: string;
    paintingId: string;
    notes: string;
  }) {
    setProgressData((current) => {
      const next = deepClone(current);
      const collection = next.collections.find((c) => c.id === collectionId);
      if (!collection) return current;

      const painting = collection.paintings.find((p) => p.id === paintingId);
      if (!painting) return current;

      painting.notes = notes;
      return next;
    });
  }

  function updatePaintingStatus({
    collectionId,
    paintingId,
    status,
  }: {
    collectionId: string;
    paintingId: string;
    status: PaintingStatus;
  }) {
    setProgressData((current) => {
      const next = deepClone(current);
      const collection = next.collections.find((c) => c.id === collectionId);
      if (!collection) return current;

      const painting = collection.paintings.find((p) => p.id === paintingId);
      if (!painting) return current;

      painting.status = status;
      return next;
    });
  }

  function updateCollectionStatus({
    collectionId,
    status,
  }: {
    collectionId: string;
    status: CollectionStatus;
  }) {
    setProgressData((current) => {
      const next = deepClone(current);
      const collection = next.collections.find((c) => c.id === collectionId);
      if (!collection) return current;

      collection.status = status;
      return next;
    });
  }

  function toggleAction({
    actionId,
    value,
  }: {
    actionId: string;
    value: boolean;
  }) {
    setActionsData((current) => {
      const next = deepClone(current);
      const action = next.actions.find((a) => a.id === actionId);
      if (!action) return current;

      action.done = value;
      return next;
    });
  }

  const value = useMemo(
    () => ({
      progressData,
      roadmapData,
      actionsData,
      hydrated,
      toggleStep,
      updateNotes,
      updatePaintingStatus,
      updateCollectionStatus,
      toggleAction,
    }),
    [progressData, roadmapData, actionsData, hydrated]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
}
