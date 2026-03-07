'use client';

import { useState } from 'react';

const PRESETS = [
  { label: '30×40', width: 30, height: 40 },
  { label: '40×50', width: 40, height: 50 },
  { label: '50×70', width: 50, height: 70 },
  { label: '60×80', width: 60, height: 80 },
  { label: '70×100', width: 70, height: 100 },
];

export default function PricingForm() {
  const [selectedPreset, setSelectedPreset] = useState<number | 'custom'>(0);
  const [customW, setCustomW] = useState('');
  const [customH, setCustomH] = useState('');
  const [materials, setMaterials] = useState('');
  const [hours, setHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('50');
  const [margin, setMargin] = useState(30);

  const matCost = parseFloat(materials) || 0;
  const laborCost = (parseFloat(hours) || 0) * (parseFloat(hourlyRate) || 0);
  const subtotal = matCost + laborCost;
  const marginValue = subtotal * (margin / 100);
  const finalPrice = subtotal + marginValue;

  const hasCosts = matCost > 0 || laborCost > 0;

  const fmt = (n: number) =>
    n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="flex flex-col gap-6">
      {/* Canvas size */}
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2">Tamanho da tela (cm)</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {PRESETS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setSelectedPreset(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                selectedPreset === i
                  ? 'border-amber-500 text-amber-400 bg-amber-900/30'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
              }`}
            >
              {p.label}
            </button>
          ))}
          <button
            onClick={() => setSelectedPreset('custom')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              selectedPreset === 'custom'
                ? 'border-amber-500 text-amber-400 bg-amber-900/30'
                : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
            }`}
          >
            Personalizado
          </button>
        </div>
        {selectedPreset === 'custom' && (
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Largura"
              value={customW}
              onChange={(e) => setCustomW(e.target.value)}
              className="w-full rounded-lg px-3 py-2 text-sm border border-zinc-700 text-zinc-200 focus:outline-none focus:border-amber-500"
              style={{ backgroundColor: '#0a0a14' }}
            />
            <span className="self-center text-zinc-500">×</span>
            <input
              type="number"
              placeholder="Altura"
              value={customH}
              onChange={(e) => setCustomH(e.target.value)}
              className="w-full rounded-lg px-3 py-2 text-sm border border-zinc-700 text-zinc-200 focus:outline-none focus:border-amber-500"
              style={{ backgroundColor: '#0a0a14' }}
            />
          </div>
        )}
        {selectedPreset !== 'custom' && (
          <p className="text-xs text-zinc-500">
            {PRESETS[selectedPreset].width} × {PRESETS[selectedPreset].height} cm
          </p>
        )}
      </div>

      {/* Materials */}
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2">
          Custo dos materiais (R$)
        </label>
        <input
          type="number"
          placeholder="Ex: 45"
          value={materials}
          onChange={(e) => setMaterials(e.target.value)}
          className="w-full rounded-lg px-3 py-2 text-sm border border-zinc-700 text-zinc-200 focus:outline-none focus:border-amber-500"
          style={{ backgroundColor: '#0a0a14' }}
        />
        <p className="text-xs text-zinc-500 mt-1">Tela, tintas, verniz, pincéis desgastados</p>
      </div>

      {/* Hours */}
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2">
          Horas trabalhadas
        </label>
        <input
          type="number"
          placeholder="Ex: 8"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full rounded-lg px-3 py-2 text-sm border border-zinc-700 text-zinc-200 focus:outline-none focus:border-amber-500"
          style={{ backgroundColor: '#0a0a14' }}
        />
      </div>

      {/* Hourly rate */}
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2">
          Valor por hora (R$)
          <span className="text-zinc-500 font-normal ml-2">Sugestão: R$30–80/h</span>
        </label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          className="w-full rounded-lg px-3 py-2 text-sm border border-zinc-700 text-zinc-200 focus:outline-none focus:border-amber-500"
          style={{ backgroundColor: '#0a0a14' }}
        />
      </div>

      {/* Margin slider */}
      <div>
        <label className="block text-sm font-semibold text-zinc-300 mb-2">
          Margem de lucro: <span className="text-amber-400">{margin}%</span>
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={margin}
          onChange={(e) => setMargin(Number(e.target.value))}
          className="w-full accent-amber-500"
        />
        <div className="flex justify-between text-xs text-zinc-500 mt-1">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Result */}
      {hasCosts && (
        <div className="rounded-xl border border-amber-500/30 p-5" style={{ backgroundColor: '#12121e' }}>
          <h3 className="text-sm font-bold text-zinc-400 mb-4">Breakdown</h3>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Materiais</span>
              <span className="text-zinc-300">{fmt(matCost)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Mão de obra</span>
              <span className="text-zinc-300">{fmt(laborCost)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Margem ({margin}%)</span>
              <span className="text-zinc-300">{fmt(marginValue)}</span>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-zinc-300">Preço sugerido</span>
              <span className="text-2xl font-bold text-amber-400">{fmt(finalPrice)}</span>
            </div>
          </div>
        </div>
      )}

      {!hasCosts && (
        <div className="rounded-xl border border-zinc-800 p-5 text-center text-zinc-600 text-sm" style={{ backgroundColor: '#12121e' }}>
          Preencha os custos acima para ver o preço sugerido
        </div>
      )}
    </div>
  );
}
