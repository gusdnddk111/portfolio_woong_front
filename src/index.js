import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import PortfolioMain from './Components/PortfolioMain';
import { Provider } from 'react-redux';
import store from './store';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PortfolioMain />
  </Provider>
)

