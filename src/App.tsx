import { Provider } from 'react-redux';
import './App.css';
import ClientApp from './components/ClientApp.tsx';
import store from './store/index.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SingleProductPage from './pages/product/[id].tsx';
import AllProduct from './pages/collection/all.tsx';
import ErrorPage from './pages/error/Error.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout.tsx';
import AboutUsPage from './pages/aboutUs/AboutUs.tsx';
import ContactUs from './pages/contactUs/ContactUs.tsx'
import { ConfigProvider } from 'antd';
import antdTheme from './styles/antdconfigTheme.ts';
import FAQ from './pages/faq/FAQ.tsx';
import React from 'react';

function App() {
  const queryClient = new QueryClient();

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          index: true,
          element: <ClientApp />,
        },
        {
          path: '/about-us',
          element: <AboutUsPage />,
        },
        {
          path: '/contact-us',
          element: <ContactUs />,
        },
        {
          path: '/faq',
          element: <FAQ />,
        },
        {
          path: '/collection/all',
          element: <AllProduct />,
        },
        {
          path: '/product/:id',
          element: <SingleProductPage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ConfigProvider theme={{token: antdTheme}}>
            <RouterProvider router={routers} />
          </ConfigProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
