import './App.css';
import logoAmaguana from './assets/logoAmaguaña.png';
import addBtn from './assets/add-30.png'; 

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <span className="brand">CHAT AMAGUAÑA</span>
          <img src={logoAmaguana} alt="Logo" className="logo" />
          <div className="upperSideTop">
            <button className="miBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />Nuevo Chat</button>
          </div>
          <div className="upperSideBottom">
            <button className="query">¿Qué hace el presidente?</button>
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
        {/* Aquí puedes agregar el contenido principal */}
      </div>
    </div>
  );
}

export default App;
