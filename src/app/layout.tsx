import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BALLION | Uma Bola. Um Celular. Um Milhão.",
  description:
    "Acerte o travessão, grave pelo celular e concorra a prêmios de até R$ 1.000.000. A plataforma global de desafios esportivos.",
  keywords: [
    "futebol",
    "desafio",
    "travessão",
    "prêmio",
    "R$ 1 milhão",
    "BALLION",
    "esporte",
    "competição",
  ],
  metadataBase: new URL("https://ballion.com"),
  openGraph: {
    title: "BALLION | Uma Bola. Um Celular. Um Milhão.",
    description:
      "Acerte o travessão, grave pelo celular e concorra a prêmios de até R$ 1.000.000.",
    type: "website",
    locale: "pt_BR",
    siteName: "BALLION",
    images: [
      {
        url: "/images/hero-ball.png",
        width: 1200,
        height: 630,
        alt: "BALLION — Uma Bola. Um Celular. Um Milhão.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BALLION | Uma Bola. Um Celular. Um Milhão.",
    description:
      "Acerte o travessão, grave pelo celular e concorra a prêmios de até R$ 1.000.000.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={cn(
          inter.variable,
          bebasNeue.variable,
          "antialiased bg-ballion-black text-white font-body"
        )}
      >
        {children}
      </body>
    </html>
  );
}
