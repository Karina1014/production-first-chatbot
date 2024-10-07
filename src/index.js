// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  ContextProvider  from './context/context'; // Asegúrate de usar la exportación correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);

