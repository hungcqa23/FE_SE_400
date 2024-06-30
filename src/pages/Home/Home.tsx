import Header from 'src/components/Header';
import Landing from 'src/components/Landing/Landing';
import OutProduct from 'src/components/OurProduct';
import Services from 'src/components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <OutProduct />
    </>
  );
}
