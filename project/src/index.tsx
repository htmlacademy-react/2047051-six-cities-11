import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Data} from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersAmount={Data.OFFERS_AMOUNT}/>
  </React.StrictMode>,
);
