'use client';

import { useState } from 'react';
import { RoadmapPhase } from '@/types/roadmap';

interface Props {
  phase: RoadmapPhase;
  isLast: boolean;
}

export default function RoadmapPhaseCard({ phase, isLast }: Props) {
  const [open, setOpen] = useState(phase.status === 'current');
  const { status, title, subtitle, year, skillLevel, metrics, advanceThreshold, requirements, focusAreas } = phase;

  const dotClass =
    status === 'completed' ? 'bg-emerald-500 border-emerald-500' :
    status === 'current'   ? 'bg-amber-500 border-amber-500' :
                             'bg-transparent border-zinc-600';

  const cardBorder =
    status === 'current'   ? 'border-amber-500/50' :
    status === 'completed' ? 'border-emerald-900/50' :
                             'border-zinc-800';

  const titleColor =
    status === 'current'   ? 'text-amber-400' :
    status === 'completed' ? 'text-emerald-400' :
                             'text-zinc-400';

  return (
    <div className={`flex gap-4 ${status === 'locked' ? 'opacity-50' : ''}`}>
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 ${dotClass} ${status === 'current' ? 'animate-pulse' : ''}`}>
          {status === 'completed' && (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-zinc-800 mt-1" />}
      </div>

      {/* Card */}
      <div className={`flex-1 mb-6 rounded-xl border ${cardBorder}`} style={{ backgroundColor: '#12121e' }}>

        {/* Header — always visible, clickable */}
        <button onClick={() => setOpen(!open)} className="w-full p-4 text-left flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className={`font-bold text-base mb-0.5 ${titleColor}`}>{title}</h3>
            <p className="text-xs text-zinc-500">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            <span className="text-xs text-zinc-600 whitespace-nowrap">{year}</span>
            <svg
              className={`w-4 h-4 text-zinc-500 transition-transform ${open ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Expanded content */}
        {open && (
          <div className="px-4 pb-5 border-t border-zinc-800/60 pt-4 flex flex-col gap-5">

            {/* Secondary info: skill + followers + posts/week */}
            <div className="flex flex-wrap gap-2">
              <Chip label="Nível" value={skillLevel} />
              <Chip label="Seguidores" value={metrics.followers} />
              <Chip label="Posts/sem" value={metrics.postsPerWeek} />
            </div>

            {/* Threshold — the main metric */}
            {advanceThreshold && (
              <div className={`rounded-xl p-3 border ${status === 'current' ? 'border-amber-500/30 bg-amber-900/10' : 'border-zinc-700/50'}`} style={status !== 'current' ? { backgroundColor: '#0a0a14' } : {}}>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                  {status === 'completed' ? 'Threshold desta fase' : 'Meta para avançar ao próximo nível'}
                </p>
                <p className="text-xs text-zinc-400 mb-3">{advanceThreshold.metric}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg p-2.5 border border-zinc-700/50" style={{ backgroundColor: '#0a0a14' }}>
                    <p className="text-xs text-zinc-500 mb-1">Mínimo</p>
                    <p className="text-sm font-bold text-zinc-200">{advanceThreshold.min}</p>
                  </div>
                  <div className={`rounded-lg p-2.5 border ${status === 'current' ? 'border-amber-500/40' : 'border-zinc-700/50'}`} style={{ backgroundColor: '#0a0a14' }}>
                    <p className="text-xs text-zinc-500 mb-1">Ideal</p>
                    <p className={`text-sm font-bold ${status === 'current' ? 'text-amber-400' : 'text-zinc-200'}`}>{advanceThreshold.ideal}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements */}
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">
                Mínimos para estar nesta fase
              </p>
              <ul className="flex flex-col gap-1.5">
                {requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-zinc-600 mt-0.5 flex-shrink-0">•</span>
                    {r.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus areas */}
            <div>
              <p className="text-xs font-semibold text-amber-500/70 uppercase tracking-wide mb-2">
                Como chegar lá
              </p>
              <ul className="flex flex-col gap-1.5">
                {focusAreas.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-amber-500/50 mt-0.5 flex-shrink-0">→</span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg px-2.5 py-1.5" style={{ backgroundColor: '#0a0a14' }}>
      <span className="text-xs text-zinc-500">{label}: </span>
      <span className="text-xs font-semibold text-zinc-300">{value}</span>
    </div>
  );
}
