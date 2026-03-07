'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Coleções' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/proximos-passos', label: 'Próximos Passos' },
  { href: '/calculadora', label: 'Calculadora' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800"
      style={{ backgroundColor: 'rgba(10,10,20,0.95)', backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <span className="font-bold text-amber-400 whitespace-nowrap text-sm">
          Lúcia Anita Artes
        </span>
        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? 'text-amber-400 bg-amber-900/30'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
