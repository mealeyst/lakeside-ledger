import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "The Lakeside Ledger - Pawling's Local News",
  description: 'Serving Pawling and the Surrounding Communities Since 1924',
  keywords: ['Pawling', 'New York', 'local news', 'newspaper', 'Dutchess County'],
  authors: [{ name: 'The Lakeside Ledger' }],
  openGraph: {
    title: "The Lakeside Ledger - Pawling's Local News",
    description: 'Serving Pawling and the Surrounding Communities Since 1924',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
