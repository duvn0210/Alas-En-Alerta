import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importar useNavigate
import IconHome from "../assets/iconoCasa.svg";
import IconSearch from "../assets/search.png";
import IconRegister from "../assets/registro.png";
import IconNotification from "../assets/notification.svg";
import IconProfile from "../assets/profile.png";
import IconInformation from "../assets/information.svg";
import Logo from "../assets/logoHome.png";

function SideMenu() {
  const navigate = useNavigate(); // Inicializar el hook useNavigate
  
  // Estado para controlar si se muestra el cuadro de búsqueda
  const [searchActive, setSearchActive] = useState(false);
  
  // Estado para notificaciones
  const [notificationActive, setNotificationActive] = useState(false);
  
  // Estado para manejar el término de búsqueda y los resultados
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      setSearchResults([searchTerm, ...searchResults]);
      setSearchTerm(""); // Limpiar el input
    }
  };

  return (
    <div className="lg:block hidden">
      <aside className="w-[200px] bg-white flex flex-col justify-between items-center">
        <div className="space-y-[38px]">
          {/* Botón Inicio */}
          <button 
          className="flex items-center space-y-1 text-sm"
          onClick={() => navigate('/')} >
            <img src={IconHome} alt="casa" className="w-10 h-10" />
            <span>Inicio</span>
          </button>

          {/* Botón Buscar */}
          <button
            className={`flex items-center space-y-1 text-sm ${searchActive ? "bg-[#71CAD26B] rounded w-[120px] h-[40px]" : ""}`}
            onClick={() => setSearchActive(!searchActive)}
          >
            <img src={IconSearch} alt="buscar" className="w-10 h-10" />
            <span>Buscar</span>
          </button>

          {/* Cuadro de búsqueda (condicional) */}
          {searchActive && (
            <div className="bg-white absolute z-20 rounded-r-lg rounded-none p-4 w-[450px] h-[601px] top-[-40px] left-[200px]">
              <span className="text-[20px] ml-2 pb-3 font-['login']">Buscar registros</span>
              <input
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="border mt-[10px] p-2 w-full bg-[#D9D9D97A] rounded-lg"
              />
              <div className="mt-4">
                {searchResults.length > 0 ? (
                  <ul className="space-y-2">
                    {searchResults.map((result, index) => (
                      <li key={index} className="p-2 rounded-md">{result}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No se han encontrado resultados.</p>
                )}
              </div>
            </div>
          )}

          {/* Botón Crear registro */}
          <button className="flex items-center space-y-2 text-sm">
            <img src={IconRegister} alt="registro" className="w-10 h-10" />
            <span>Crear registro</span>
          </button>

          <div>
            <img
              src={Logo}
              alt="logo"
              className="w-28 h-28 relative left-[110px] z-30"
            />
          </div>

          {/* Botón Notificaciones */}
          <button
            className={`flex items-center space-y-1 text-sm ${notificationActive ? "bg-[#71CAD26B] rounded w-[120px] h-[40px]" : ""}`}
            onClick={() => setNotificationActive(!notificationActive)}
          >
            <img src={IconNotification} alt="notificación" className="w-10 h-10" />
            <span>Notificaciones</span>
          </button>

          {notificationActive && (
            <div className="bg-white absolute z-20 rounded-r-lg rounded-none p-4 w-[450px] h-[601px] top-[-40px] left-[200px]">
              <span className="text-[20px] ml-2 pb-3 font-['login']">Notificaciones</span>
            </div>
          )}

          {/* Botón Perfil*/}
          <button
            className="flex items-center space-y-1 text-sm"
            onClick={() => navigate('/Perfil')} 
          >
            <img src={IconProfile} alt="perfil" className="w-10 h-10" />
            <span>Perfil</span>
          </button>

          {/* Botón Información */}
          <button className="flex items-center space-y-1 text-sm mt-4">
            <img src={IconInformation} alt="información" className="w-10 h-10" />
            <span>Información</span>
          </button>
        </div>
        <div className="border-[0.5px] border-[#022834] h-full absolute ml-[200px]"></div>
      </aside>
    </div>
  );
}

export default SideMenu;
