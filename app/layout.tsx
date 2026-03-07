import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import DashboardProvider from "@/components/DashboardProvider";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lúcia Anita Artes — Dashboard",
  description: "Acompanhe o progresso das coleções e pinturas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body className="antialiased min-h-screen" style={{ backgroundColor: '#0a0a14', color: '#e5e7eb' }}>
        <DashboardProvider>
          <NavBar />
          <div className="pt-14">{children}</div>
        </DashboardProvider>
      </body>
    </html>
  );
}
