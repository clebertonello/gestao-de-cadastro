import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ProductBody from './components/product';
import UserBody from './components/user';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <UserBody />
      <ProductBody />
      <Footer />
    </>
  );
}

export default App;
