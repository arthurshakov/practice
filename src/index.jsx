// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store';
import ReactDOM from 'react-dom/client';
import { Blog } from './Blog';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Blog />
    </Provider>
  </BrowserRouter>
);
