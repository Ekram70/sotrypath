import Navbar from '@/components/Navbar';
import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Story Path',
  description: 'Interactive Storytelling Platform with Branching Narratives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} text-[#303133]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
