import './App.css';
import { useState, useEffect } from "react"; 
import { useMyContext } from './context/context'; 
import logoAmaguana from './assets/logoAmaguaña.png';
import addBtn from './assets/add-30.png';
import message from './assets/message.svg';
import userChat from './assets/nuevoGaditoChat.png';

function App() {
  const [prompt, setPrompt] = useState(""); // Estado para el input del usuario
  const { onSent, response, error } = useMyContext(); // Usa el contexto
  const [chats, setChats] = useState([]); // Estado para almacenar los mensajes de chat
  const [loading, setLoading] = useState(false); // Estado para manejar la carga

  // Efecto para manejar la respuesta del bot
  useEffect(() => {
    // Verifica si hay una respuesta y si no está vacía
    if (response && response.trim() !== "") {
      setChats((prevChats) => [...prevChats, { sender: 'bot', text: response }]); // Agrega la respuesta del bot al estado
      setLoading(false); // Deja de mostrar el loading
    }
  }, [response]); // Se ejecuta cada vez que 'response' cambia

  // Función para manejar el envío del mensaje
  const handleSend = () => {
    if (prompt.trim() !== "") {
      setChats((prevChats) => [...prevChats, { sender: 'user', text: prompt }]); // Agrega el mensaje del usuario al estado
      onSent(prompt); // Envía el mensaje a través del contexto
      setPrompt(""); // Limpia el input después de enviar
      setLoading(true); // Muestra el loading
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <span className="brand">CHAT AMAGUAÑA</span>
          <img src={logoAmaguana} alt="Logo" className="logo" />
          <div className="upperSideTop">
            <button className="miBtn">
              <img src={addBtn} alt="Nuevo Chat" className="addBtn" />
              Nuevo Chat
            </button>
          </div>
          <div className="upperSideBottom">
            <button className="query">
              <img src={message} alt="Consulta" />
              ¿Qué hace el presidente?
            </button>
            <button className="query">
              <img src={message} alt="Consulta" />
              ¿Qué hace el presidente?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="socialNetworks">
            <a href="https://www.facebook.com/people/Amagua%C3%B1a-GAD-Parroquial/100093110247789/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/amaguanagad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@amaguanagad" title="TikTok" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
  
      <div className="main">
        <span className="brand1">CHAT AMAGUAÑA</span>
        <div className='chats'>
          {chats.map((chat, index) => (
            <div key={index} className={`chat ${chat.sender}`}>
              {chat.sender === 'user' ? (
                <p className='txtUser'>{chat.text}</p>
              ) : (
                <>
                  <img className='chatImg-bot' src={userChat} alt="Icono de Usuario" />
                  <p className='txtBot'>{chat.text}</p>
                </>
              )}
            </div>
          ))}
          {loading && <p className='txtBot'>Cargando...</p>} {/* Mensaje de carga mientras espera respuesta */}
          {error && <p className='txtBot error'>{error}</p>} {/* Muestra el error si existe */}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input 
              type="text" 
              placeholder='Envía un mensaje a ChatGadito' 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)} // Actualiza el estado al escribir
              onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }} // Permite enviar al presionar "Enter"
            />
            <button className='send' onClick={handleSend}>Enviar</button>
          </div>
          <p className='disclaimer'>CHAT AMAGUAÑA</p>
        </div>
      </div>
    </div>
  );
}

export default App;
