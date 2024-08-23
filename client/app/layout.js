import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata = {
  title: 'Story Path',
  description: 'Interactive Storytelling Platform with Branching Narratives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
