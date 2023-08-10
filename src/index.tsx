import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/styles.css';
import './styles/customize-progress-bar.css';

const element = document.getElementById('root');
if (element === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(element);

root.render(
  <>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </>
);