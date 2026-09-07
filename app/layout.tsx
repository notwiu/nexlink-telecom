import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Nexlink Telecom — Redes GPON, FTTx e FTTH",
  description:
    "Parceiros estratégicos de empresas e ISPs, fornecendo equipes técnicas de elite para implantação e manutenção de redes GPON, FTTx e FTTH.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`dark ${jakarta.variable}`}>
      <body className="bg-surface font-sans text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  );
}
