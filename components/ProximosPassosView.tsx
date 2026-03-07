'use client';

import ActionItem from '@/components/ActionItem';
import { useDashboard } from '@/components/DashboardProvider';
import { ActionCategory } from '@/types/proximos-passos';

const CATEGORIES: { id: ActionCategory; label: string; emoji: string }[] = [
  { id: 'instagram', label: 'Instagram', emoji: '📸' },
  { id: 'pintura', label: 'Pintura', emoji: '🎨' },
  { id: 'negocio', label: 'Negócio', emoji: '💼' },
];

export default function ProximosPassosView() {
  const { actionsData } = useDashboard();

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-amber-400 mb-1">
          Próximos Passos
        </h1>
        <p className="text-sm text-zinc-500">
          Ações prioritárias para crescer o negócio
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {CATEGORIES.map(({ id, label, emoji }) => {
          const items = actionsData.actions
            .filter((a) => a.category === id)
            .sort((a, b) => a.order - b.order);

          if (items.length === 0) return null;

          const doneCount = items.filter((a) => a.done).length;

          return (
            <section key={id}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{emoji}</span>
                <h2 className="font-bold text-zinc-200">{label}</h2>
                <span className="text-xs text-zinc-500 ml-auto">
                  {doneCount}/{items.length}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <ActionItem key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
