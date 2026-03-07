import Link from 'next/link';
import { Collection } from '@/types';
import { collectionProgress } from '@/lib/data';
import ProgressBar from './ProgressBar';
import { collectionStatusLabel } from '@/lib/utils';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const progress = collectionProgress(collection.paintings);
  const percent = Math.round(progress * 100);
  const isLocked = collection.status === 'locked';
  const isCompleted = collection.status === 'completed';

  const barColor = isCompleted ? 'emerald' : isLocked ? 'zinc' : 'amber';

  const card = (
    <div
      className={`rounded-2xl p-6 border transition-all duration-200 ${
        isLocked
          ? 'opacity-50 cursor-not-allowed border-zinc-800'
          : 'hover:scale-[1.02] cursor-pointer border-zinc-700 hover:border-amber-500/50'
      }`}
      style={{ backgroundColor: '#12121e' }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-4xl">{collection.emoji}</span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isCompleted
              ? 'bg-emerald-900/50 text-emerald-400'
              : isLocked
              ? 'bg-zinc-800 text-zinc-500'
              : 'bg-amber-900/50 text-amber-400'
          }`}
        >
          {collectionStatusLabel(collection.status)}
        </span>
      </div>

      <h2 className="text-lg font-bold text-white mb-1">{collection.title}</h2>
      <p className="text-sm text-zinc-400 mb-4">{collection.description}</p>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-zinc-500">
          <span>{collection.paintings.length} pinturas</span>
          <span>{percent}%</span>
        </div>
        <ProgressBar value={progress} color={barColor} />
      </div>
    </div>
  );

  if (isLocked) return card;

  return (
    <Link href={`/collection/${collection.id}`} className="block">
      {card}
    </Link>
  );
}
