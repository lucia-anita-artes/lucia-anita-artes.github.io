'use client';

import Link from 'next/link';
import PaintingCard from '@/components/PaintingCard';
import ProgressBar from '@/components/ProgressBar';
import { collectionProgress } from '@/lib/data';
import { useDashboard } from '@/components/DashboardProvider';

interface CollectionPageViewProps {
  collectionId: string;
}

export default function CollectionPageView({
  collectionId,
}: CollectionPageViewProps) {
  const { progressData } = useDashboard();
  const collection = progressData.collections.find((c) => c.id === collectionId);

  if (!collection) {
    return (
      <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-4 inline-block"
        >
          ← Voltar ao mapa
        </Link>
        <p className="text-zinc-400">Coleção não encontrada.</p>
      </main>
    );
  }

  const progress = collectionProgress(collection.paintings);
  const percent = Math.round(progress * 100);

  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-4 inline-block"
        >
          ← Voltar ao mapa
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{collection.emoji}</span>
          <h1 className="text-2xl font-extrabold text-white">
            {collection.title}
          </h1>
        </div>
        <p className="text-zinc-400 mb-4">{collection.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-zinc-500">
            <span>{collection.paintings.length} pinturas</span>
            <span>{percent}% concluído</span>
          </div>
          <ProgressBar
            value={progress}
            color={collection.status === 'completed' ? 'emerald' : 'amber'}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {collection.paintings.map((painting, index) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            collectionId={collection.id}
            index={index}
          />
        ))}
        {collection.paintings.length === 0 && (
          <p className="text-zinc-500 text-center py-10">Nenhuma pintura ainda.</p>
        )}
      </div>
    </main>
  );
}
