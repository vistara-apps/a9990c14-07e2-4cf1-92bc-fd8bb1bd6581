import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrendPollr - Engage your community with instant trend polls',
  description: 'Create and participate in trend-based polls, earn rewards, and get valuable insights.',
  openGraph: {
    title: 'TrendPollr',
    description: 'Engage your community with instant trend polls and earn rewards.',
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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
