import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Setica - Unified Platform for 40+ Integrated Solutions',
  description: 'Setica delivers comprehensive product ecosystem and premium development services across healthcare, logistics, fintech, and enterprise solutions.',
  keywords: 'Setica, product development, software services, healthcare platform, fintech, logistics, enterprise solutions',
  authors: [{ name: 'Setica' }],
  openGraph: {
    title: 'Setica - Unified Platform for 40+ Integrated Solutions',
    description: 'Explore our ecosystem of integrated solutions and premium development services.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={inter.variable}>
        {/* Loader */}
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}