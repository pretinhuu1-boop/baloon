import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ballion | KickTrak Pro — Treine Como Nunca",
  description:
    "O KickTrak Pro transforma qualquer campo em seu centro de treino pessoal. Precisão, métricas e gamificação na palma da sua mão.",
  keywords: ["futebol", "treino", "precisão", "chute", "app", "KickTrak Pro", "Ballion"],
  openGraph: {
    title: "Ballion | KickTrak Pro",
    description: "Tecnologia para o futebol de verdade",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased bg-ballion-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
