import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ORVIA Security & Intelligence',
  description: 'Human-led intelligence, digital evidence, investigation technology and governed AI — built to turn fragmented information into defensible decisions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
