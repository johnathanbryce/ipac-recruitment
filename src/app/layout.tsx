import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import type { Metadata } from "next";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IPAC',
  description: 'Recruitment website for IPAC',
  keywords: 'IPAC, healthcare, hospital, infection prevention and control',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
