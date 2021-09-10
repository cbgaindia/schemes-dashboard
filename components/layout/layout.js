import Footer from 'components/footer/footer';
import Skiplink from 'components/skiplink/skiplink';
import Header from 'components/header/header';

export default function Layout({ children }) {
  return (
    <>
      <Skiplink />
      <Header />

      {children}
      <Footer />
    </>
  );
}
