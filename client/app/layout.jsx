'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/auth/AuthContext';
import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} text-[#303133]`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
