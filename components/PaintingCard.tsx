import Link from 'next/link';
import { Painting } from '@/types';
import { countCompletedSteps, TOTAL_STEPS } from '@/lib/data';
import ProgressBar from './ProgressBar';
import { paintingStatusLabel } from '@/lib/utils';

interface PaintingCardProps {
  painting: Painting;
  collectionId: string;
  index: number;
}

export default function PaintingCard({ painting, collectionId, index }: PaintingCardProps) {
  const completed = countCompletedSteps(painting.steps);
  const progress = completed / TOTAL_STEPS;
  const isLocked = painting.status === 'locked';
  const isDone = painting.status === 'completed';

  const statusColor = isDone
    ? 'bg-emerald-900/50 text-emerald-400'
    : painting.status === 'in_progress'
    ? 'bg-amber-900/50 text-amber-400'
    : painting.status === 'available'
    ? 'bg-blue-900/50 text-blue-400'
    : 'bg-zinc-800 text-zinc-500';

  const barColor = isDone ? 'emerald' : isLocked ? 'zinc' : 'amber';

  const card = (
    <div
      className={`rounded-2xl p-5 border transition-all duration-200 ${
        isLocked
          ? 'opacity-40 cursor-not-allowed border-zinc-800'
          : 'hover:scale-[1.02] cursor-pointer border-zinc-700 hover:border-amber-500/50'
      }`}
      style={{ backgroundColor: '#12121e' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-bold text-zinc-600">#{index + 1}</span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor}`}>
          {paintingStatusLabel(painting.status)}
        </span>
      </div>

      <h3 className="text-base font-bold text-white mb-3">{painting.title}</h3>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-zinc-500">
          <span>{completed}/{TOTAL_STEPS} etapas</span>
          <span>{Math.round(progress * 100)}%</span>
        </div>
        <ProgressBar value={progress} color={barColor} />
      </div>
    </div>
  );

  if (isLocked) return card;

  return (
    <Link href={`/painting/${collectionId}/${painting.id}`} className="block">
      {card}
    </Link>
  );
}
