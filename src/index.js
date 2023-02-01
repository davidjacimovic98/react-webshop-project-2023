import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products_context';
import { FiltersProvider } from './context/filters_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';

// domain
// dev - l3dgj8qo.us.auth0.com;

// client ID
// p6wG306eHsEpAug3avSjh6wseaG1z9zd;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-l3dgj8qo.us.auth0.com'
      clientId='p6wG306eHsEpAug3avSjh6wseaG1z9zd'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <FiltersProvider>
            <CartProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CartProvider>
          </FiltersProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
