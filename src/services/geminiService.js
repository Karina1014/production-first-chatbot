import axios from 'axios';

const GEMINI_API_URL = 'https://api.gemini-ai.com'; // Reemplaza con la URL de la API de Gemini
const API_KEY = 'tu-api-key'; // Asegúrate de tener tu clave de API de Gemini

export const fetchGeminiData = async (query) => {
    try {
        const response = await axios.post(`${GEMINI_API_URL}/endpoint`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            data: {
                query: query, // El query o datos que quieras enviar a la API
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Gemini:', error);
        throw error;
    }
};
