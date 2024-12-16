import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata = {
  title: 'AI Chat Application',
  description: 'Advanced AI chat application supporting multiple models and providers',
  openGraph: {
    title: 'AI Chat Application',
    description: 'Advanced AI chat application supporting multiple models and providers',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chat Application',
    description: 'Advanced AI chat application supporting multiple models and providers',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <div className="min-h-screen bg-background">
            {children}
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}