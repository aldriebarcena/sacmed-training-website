// These styles apply to every route in the application
import './global.css';
import { Roboto, Outfit } from 'next/font/google';
import Navigation from '@/components/Navigation.jsx';
import Footer from '@/components/Footer.jsx';

export const metadata = {
  title: 'SacMed Training',
  description: 'SacMed Training Website',
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
      <body className="bg-background flex flex-col min-h-screen">
        <Navigation />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
