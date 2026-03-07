'use client';

import CollectionCard from '@/components/CollectionCard';
import { useDashboard } from '@/components/DashboardProvider';

export default function HomeView() {
  const { progressData } = useDashboard();

  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-white mb-1">
          🎨 Lúcia Anita Artes
        </h1>
        <p className="text-zinc-400">Seu mapa de coleções e progresso</p>
      </div>

      <div className="space-y-4">
        {progressData.collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </main>
  );
}
