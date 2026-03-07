'use client';

import { useState, useRef, useEffect } from 'react';
import { useDashboard } from '@/components/DashboardProvider';

interface NotesFieldProps {
  initialValue: string;
  collectionId: string;
  paintingId: string;
}

export default function NotesField({ initialValue, collectionId, paintingId }: NotesFieldProps) {
  const { updateNotes } = useDashboard();
  const [value, setValue] = useState(initialValue);
  const [saved, setSaved] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    setSaved(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => save(newValue), 800);
  }

  function save(notes: string) {
    updateNotes({
      collectionId,
      paintingId,
      notes,
    });
    setSaved(true);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setValue(initialValue);
      setSaved(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, [initialValue]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-zinc-400">Notas</label>
        <span className={`text-xs transition-all ${saved ? 'text-emerald-500' : 'text-amber-400'}`}>
          {saved ? 'Salvo' : 'Salvando...'}
        </span>
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder="Anotações sobre esta pintura..."
        rows={4}
        className="w-full rounded-xl p-4 text-sm text-zinc-300 placeholder-zinc-600 border border-zinc-700 focus:border-amber-500/50 focus:outline-none resize-none transition-colors"
        style={{ backgroundColor: '#0a0a14' }}
      />
    </div>
  );
}
