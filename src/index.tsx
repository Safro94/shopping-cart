import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './components/app';

import { ProductsProvider } from './hooks/products';

import './index.css';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
