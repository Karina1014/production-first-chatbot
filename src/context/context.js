import { createContext, useContext, useEffect, useState } from "react";
import runChat from "../config/gemeni";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [response, setResponse] = useState(""); // Estado para almacenar la respuesta
    const [error, setError] = useState(null); // Estado para manejar errores

    const onSent = async (prompt) => {
        try {
            const chatResponse = await runChat(prompt);
            console.log(chatResponse); // Maneja la respuesta según sea necesario
            setResponse(chatResponse); // Guarda la respuesta en el estado
        } catch (err) {
            console.error("Error al enviar el mensaje:", err);
            setError("Ocurrió un error al enviar el mensaje."); // Guarda el mensaje de error
        }
    };

    // Usa useEffect para enviar un mensaje inicial al cargar el contexto
    useEffect(() => {
        const initialPrompt = "¿que son es GAD PARROQUIAL DE AMAGUAÑA?";
        onSent(initialPrompt);
    }, []); // El array vacío significa que esto se ejecuta solo una vez

    const contextValue = {
        onSent, // Exporta la función para que los componentes hijos puedan usarla
        response, // Exporta la respuesta si la necesitas en los componentes hijos
        error, // Exporta el estado de error si lo necesitas
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

// Exportar el proveedor y el contexto para ser utilizados en otros componentes
export const useMyContext = () => useContext(Context);
export default ContextProvider;
