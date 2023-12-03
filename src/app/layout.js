import Header from './components/header/header';
import Footer from './components/footer/footer';
import './globals.css';
import './common.css';

export const metadata = {
  title: 'Ecosolution - Green Energy for Life',
  description:
    'Discover sustainable living with Ecosolution. Explore renewable energy solutions for a greener future. Learn about eco-friendly practices and embrace a lifestyle that benefits both you and the planet. Join us on the journey towards a cleaner, sustainable world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="modal-root">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
