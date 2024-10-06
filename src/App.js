import './App.css';
import logoAmaguana from './assets/logoAmaguaña.png';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
        <span className="brand">CHAT AMAGUAÑA</span>

          <div className="upperSideTop">
            <img src={logoAmaguana} alt="Logo" className="logo" />
            
            <button className="miBtn">Nuevo Chat</button>
            
            <div className="upperSideBottom">
              <button className="query">Que hace el presidente?</button>
            </div>
          </div>
        </div>
        <div className="lowerside">
          {/* Aquí puedes agregar más contenido */}
        </div>
      </div>
      <div className="main">
        {/* Aquí puedes agregar el contenido principal */}
      </div>
    </div>
  );
}

export default App;
