import PricingForm from '@/components/PricingForm';

export default function CalculadoraPage() {
  return (
    <main className="max-w-lg mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-amber-400 mb-1">Calculadora de Preço</h1>
        <p className="text-sm text-zinc-500">Calcule o preço justo de cada obra com margem de lucro real</p>
      </div>

      <PricingForm />
    </main>
  );
}
