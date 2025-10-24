import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTOCREA - De Idea a Materialización con IA",
  description: "Transforma ideas en aplicaciones web completas con JoxCoder v1. Desarrollo autónomo, código limpio, deploy instantáneo.",
  keywords: ["AI", "code generation", "web development", "JoxCoder", "AUTOCREA"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
