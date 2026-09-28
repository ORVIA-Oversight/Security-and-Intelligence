import './globals.css';
import { Source_Serif_4, Montserrat } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sourceSerif = Source_Serif_4({ subsets:['latin'], variable:'--font-source-serif', display:'swap' });
const montserrat = Montserrat({ subsets:['latin'], variable:'--font-montserrat', display:'swap' });

export const metadata = {
  metadataBase: new URL('https://security.orvia.org.uk'),
  title: {
    default: 'ORVIA Security & Intelligence',
    template: '%s | ORVIA Security & Intelligence',
  },
  description: 'Evidence-led intelligence, evidence verification and investigative support with clear provenance and human authority.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://security.orvia.org.uk',
    siteName: 'ORVIA Security & Intelligence',
    title: 'ORVIA Security & Intelligence',
    description: 'Evidence-led intelligence. Human judgement. Clear provenance.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
