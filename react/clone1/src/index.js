import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import Meta from './Meta';
import GlobalStyles from './GlobalStyles';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Meta />
        <GlobalStyles />
        <App />
    </BrowserRouter>

);

