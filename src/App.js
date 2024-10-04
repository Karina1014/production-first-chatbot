import React, { useEffect, useState } from 'react';
import { fetchGeminiData } from './services/geminiService';

function Chatbot() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const query = "Hello Gemini!";
        fetchGeminiData(query).then(data => {
            setResponse(data);
        }).catch(error => {
            console.error("Error:", error);
        });
    }, []);

    return (
        <div>
            <h1>Chatbot con Gemini IA</h1>
            {response ? <p>Respuesta de Gemini: {response}</p> : <p>Cargando...</p>}
        </div>
    );
}

export default Chatbot;
