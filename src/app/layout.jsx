// These styles apply to every route in the application
import './global.css';
import { Roboto, Outfit } from 'next/font/google';
import Navigation from '@/components/Navigation.jsx';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: '300',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: '500',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation />
      <body className="bg-background">{children}</body>
      {/* footer */}
    </html>
  );
}