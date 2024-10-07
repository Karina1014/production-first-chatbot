import { createContext, useContext, useEffect, useState } from "react";
import runChat from "../config/gemeni";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [response, setResponse] = useState(""); 
    const [error, setError] = useState(null);

    const onSent = async (prompt) => {
        try {
            const chatResponse = await runChat(prompt); // Llama a Gemeni
            console.log(chatResponse); 
            setResponse(chatResponse); // Guarda la respuesta en el estado
        } catch (err) {
            console.error("Error al enviar el mensaje:", err);
            setError("Ocurrió un error al enviar el mensaje.");
        }
    };

    useEffect(() => {
        const initialPrompt = "¿Qué son es GAD PARROQUIAL DE AMAGUAÑA?";
        onSent(initialPrompt); // Enviar el mensaje inicial
    }, []);

    const contextValue = {
        onSent,
        response, // Asegúrate de que esto esté disponible
        error,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export const useMyContext = () => useContext(Context);
export default ContextProvider;
