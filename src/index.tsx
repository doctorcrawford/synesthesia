import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.css'

const element = document.getElementById('root');
if (element === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(element);

root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </React.StrictMode>
  </>
);