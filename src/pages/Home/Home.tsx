import AboutFarm from 'src/components/AboutFarm';
import ChooseCashew from 'src/components/ChooseCashew';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Landing from 'src/components/Landing/Landing';
import OutProduct from 'src/components/OurProduct';
import ReasonToBuy from 'src/components/ReasonToBuy';
import Services from 'src/components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <OutProduct />
      <AboutFarm />
      <ChooseCashew />
      <ReasonToBuy />
      <Footer />
    </>
  );
}
