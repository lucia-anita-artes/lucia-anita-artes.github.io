'use client';

import { PaintingSteps } from '@/types';
import { STEP_LABELS } from '@/lib/utils';
import { useDashboard } from '@/components/DashboardProvider';

interface StepCheckboxProps {
  step: keyof PaintingSteps;
  checked: boolean;
  collectionId: string;
  paintingId: string;
}

export default function StepCheckbox({ step, checked, collectionId, paintingId }: StepCheckboxProps) {
  const { toggleStep } = useDashboard();

  function toggle() {
    const newValue = !checked;
    toggleStep({
      collectionId,
      paintingId,
      step,
      value: newValue,
    });
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-3 w-full p-4 rounded-xl border text-left transition-all duration-150 ${
        checked
          ? 'border-emerald-600/50 bg-emerald-900/20'
          : 'border-zinc-700 hover:border-amber-500/50 hover:bg-amber-900/10'
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          checked ? 'border-emerald-500 bg-emerald-500' : 'border-zinc-600'
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`font-semibold text-sm ${checked ? 'text-emerald-400' : 'text-zinc-300'}`}>
        {STEP_LABELS[step]}
      </span>
    </button>
  );
}
