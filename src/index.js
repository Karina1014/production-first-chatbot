// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './context/context'; // Asegúrate de que la ruta sea correcta y que el archivo se llame context.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> {/* Esto es opcional, pero recomendado para detectar problemas */}
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);

