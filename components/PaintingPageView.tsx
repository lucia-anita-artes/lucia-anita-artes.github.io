'use client';

import Link from 'next/link';
import NotesField from '@/components/NotesField';
import ProgressBar from '@/components/ProgressBar';
import StepCheckbox from '@/components/StepCheckbox';
import { useDashboard } from '@/components/DashboardProvider';
import { PaintingSteps } from '@/types';
import { countCompletedSteps, TOTAL_STEPS } from '@/lib/data';

interface PaintingPageViewProps {
  collectionId: string;
  paintingId: string;
}

const STEP_ORDER: (keyof PaintingSteps)[] = [
  'reference',
  'sketch',
  'started',
  'finished',
  'photo',
  'reel',
  'carousel',
];

export default function PaintingPageView({
  collectionId,
  paintingId,
}: PaintingPageViewProps) {
  const { progressData } = useDashboard();
  const collection = progressData.collections.find((c) => c.id === collectionId);
  const painting = collection?.paintings.find((p) => p.id === paintingId);

  if (!collection || !painting) {
    return (
      <main className="min-h-screen px-4 py-10 max-w-xl mx-auto">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-4 inline-block"
        >
          ← Voltar ao mapa
        </Link>
        <p className="text-zinc-400">Pintura não encontrada.</p>
      </main>
    );
  }

  const completed = countCompletedSteps(painting.steps);
  const progress = completed / TOTAL_STEPS;

  return (
    <main className="min-h-screen px-4 py-10 max-w-xl mx-auto">
      <div className="mb-8">
        <Link
          href={`/collection/${collectionId}`}
          className="text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-4 inline-block"
        >
          ← Voltar para {collection.title}
        </Link>
        <h1 className="text-2xl font-extrabold text-white mb-1">
          {painting.title}
        </h1>
        <p className="text-sm text-zinc-400 mb-4">
          {collection.emoji} {collection.title}
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-zinc-500">
            <span>
              {completed}/{TOTAL_STEPS} etapas concluídas
            </span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <ProgressBar
            value={progress}
            color={painting.status === 'completed' ? 'emerald' : 'amber'}
          />
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {STEP_ORDER.map((step) => (
          <StepCheckbox
            key={step}
            step={step}
            checked={painting.steps[step]}
            collectionId={collectionId}
            paintingId={paintingId}
          />
        ))}
      </div>

      <div
        className="rounded-2xl p-5 border border-zinc-700"
        style={{ backgroundColor: '#12121e' }}
      >
        <NotesField
          initialValue={painting.notes}
          collectionId={collectionId}
          paintingId={paintingId}
        />
      </div>
    </main>
  );
}
