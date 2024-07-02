import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import ProductsInShop from 'src/components/ProductsInShop/ProductsInShop';
import ShopBanner from 'src/components/ShopBanner';

export default function ProductList() {
  return (
    <>
      <Header />
      <ShopBanner />
      <ProductsInShop />
      <Footer />
    </>
  );
}
