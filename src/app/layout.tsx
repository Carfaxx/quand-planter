import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Importe les styles globaux

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata pour la page
export const metadata: Metadata = {
  title: "Quand Planter",
  description: "Application pour savoir quand planter des légumes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">{/*'fr' pour définir la langue comme français pour l'instant*/}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
