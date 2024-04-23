import { Provider } from 'react-redux';
import './App.css';
import ClientApp from './components/ClientApp.tsx';
import store from './store/index.ts';
import Navbar from './components/Navbars/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProductPage from './pages/product/[id].tsx';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ClientApp />} />
            <Route path={`/product/:id`} element={<SingleProductPage />} />
            <Route path='*'  />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
