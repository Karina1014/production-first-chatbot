// src/Chatbot.js

import React, { useState } from 'react';
import { fetchGeminiData } from './services/geminiService';

function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await fetchGeminiData(query);
      setResponse(data.answer); // Ajusta esto según la estructura de la respuesta de tu API
    } catch (error) {
      setResponse('Error al obtener respuesta del chatbot');
    }
  };

  return (
    <div>
      <h2>Chatbot con Gemini IA</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Escribe tu pregunta"
        />
        <button type="submit">Enviar</button>
      </form>
      {response && <p>Respuesta del chatbot: {response}</p>}
    </div>
  );
}

export default Chatbot;
