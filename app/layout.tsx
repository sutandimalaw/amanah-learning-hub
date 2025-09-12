import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/site/navbar';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yan Consulting - Amanah Learning Partner',
  description: 'Partner Strategis Pengembangan SDM yang Amanah & Terpercaya. Pelatihan Leadership, Sales, dan Service Excellence sejak 2023.',
  keywords: 'consulting, training, leadership, sales, service excellence, SDM, human resources',
  authors: [{ name: 'Yan Consulting' }],
  openGraph: {
    title: 'Yan Consulting - Amanah Learning Partner',
    description: 'Partner Strategis Pengembangan SDM yang Amanah & Terpercaya',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <TooltipProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}