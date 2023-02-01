import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from './pages';

import { Navbar, Sidebar, Footer } from './components';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </AuthWrapper>
  );
}

export default App;
