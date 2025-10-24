import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AUTOCREA - De Idea a Materialización',
  description: 'Plataforma web completa que permite generar aplicaciones web funcionales mediante prompts en lenguaje natural, potenciada por JoxCoder AI.',
  keywords: ['AI', 'code generation', 'web development', 'JoxCoder', 'automation'],
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
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
