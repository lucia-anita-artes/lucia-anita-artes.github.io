'use client';

import { ActionItem as ActionItemType } from '@/types/proximos-passos';
import { useDashboard } from '@/components/DashboardProvider';

const PRIORITY_COLORS: Record<ActionItemType['priority'], string> = {
  alta: 'text-amber-400 bg-amber-900/30 border-amber-800/50',
  media: 'text-yellow-400 bg-yellow-900/20 border-yellow-800/40',
  baixa: 'text-zinc-400 bg-zinc-800/50 border-zinc-700',
};

const PRIORITY_LABELS: Record<ActionItemType['priority'], string> = {
  alta: 'Alta',
  media: 'Média',
  baixa: 'Baixa',
};

interface ActionItemProps {
  item: ActionItemType;
}

export default function ActionItem({ item }: ActionItemProps) {
  const { toggleAction } = useDashboard();
  const done = item.done;

  function toggle() {
    const newValue = !done;
    toggleAction({ actionId: item.id, value: newValue });
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-start gap-3 w-full p-4 rounded-xl border text-left transition-all duration-150 ${
        done
          ? 'border-emerald-600/50 bg-emerald-900/20'
          : 'border-zinc-700 hover:border-amber-500/50 hover:bg-amber-900/10'
      }`}
    >
      {/* Checkbox */}
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
          done ? 'border-emerald-500 bg-emerald-500' : 'border-zinc-600'
        }`}
      >
        {done && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className={`font-semibold text-sm ${done ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
            {item.title}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${PRIORITY_COLORS[item.priority]}`}>
            {PRIORITY_LABELS[item.priority]}
          </span>
        </div>
        {item.description && (
          <p className={`text-xs leading-relaxed ${done ? 'text-zinc-600' : 'text-zinc-500'}`}>
            {item.description}
          </p>
        )}
      </div>
    </button>
  );
}
