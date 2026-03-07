interface ProgressBarProps {
  value: number; // 0 to 1
  color?: 'amber' | 'emerald' | 'zinc';
}

export default function ProgressBar({ value, color = 'amber' }: ProgressBarProps) {
  const percent = Math.round(value * 100);

  const trackColors: Record<string, string> = {
    amber: '#292212',
    emerald: '#122212',
    zinc: '#1e1e1e',
  };

  const fillColors: Record<string, string> = {
    amber: '#f59e0b',
    emerald: '#10b981',
    zinc: '#71717a',
  };

  return (
    <div className="w-full rounded-full h-2" style={{ backgroundColor: trackColors[color] }}>
      <div
        className="h-2 rounded-full transition-all duration-500"
        style={{ width: `${percent}%`, backgroundColor: fillColors[color] }}
      />
    </div>
  );
}
