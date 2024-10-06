import './App.css';
import logoAmaguana from './assets/logoAmaguaña.png';
import addBtn from './assets/add-30.png'; 
import message from './assets/message.svg';
import userIcon from './assets/icon-user.png';
import userChat from './assets/nuevoGaditoChat.png';

function App() {
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
                <div className='chat'>
                  <img className='chatImg' src={userChat} alt="Icono de Usuario" />
                  <p className='txtBot'>¡Hola! Bienvenido al chat del GAD Parroquial de Amaguaña. ¿En qué puedo ayudarte hoy?</p>
                </div>
                <div className='chat'>
                  <img className='chatImg bot' src={userIcon} alt="Chat de Usuario" />
                  <p className='txtUser'>
                      El párrafo generalmente lo definimos como un conjunto de oraciones escritas que comparten un tema y un contexto comunicativo. Por lo tanto, las escribimos en un orden, es decir, en secuencia. El párrafo también es considerado una de las unidades en que se puede dividir un texto escrito.
                  </p>
                </div>
          </div>
          <div className='chatFooter'>
            <div className='inp'>
                <input type="text" placeholder='Envía un mensaje a ChatGadito' />
                <button className='send'>Enviar</button>
            </div>
            <p className='disclaimer'>CHAT AMAGUAÑA</p>
        </div>

      </div>

    </div>
  );
}

export default App;
