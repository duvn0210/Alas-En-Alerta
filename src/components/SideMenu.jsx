import { useState } from "react";
import IconHome from "../assets/iconoCasa.svg";
import IconSearch from "../assets/search.png";
import IconRegister from "../assets/registro.png";
import IconNotification from "../assets/notification.svg";
import IconProfile from "../assets/profile.png";
import IconInformation from "../assets/information.svg";
import Logo from "../assets/logoHome.png";

function SideMenu() {
  // Estado para controlar el cuadro de búsqueda
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Estado para manejar las notificaciones
  const [notificationActive, setNotificationActive] = useState(false);

  // Variable compartida para el estilo de botón activo
  const activeButtonStyle = "bg-[#71CAD26B] rounded w-[130px] h-[40px]";

  // Función para manejar el enter en la búsqueda
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      setSearchResults([searchTerm, ...searchResults]);
      setSearchTerm("");  // Limpiar el input
    }
  };

  return (
    <div className="lg:block hidden">
      <aside className="w-[200px] bg-white flex flex-col justify-between items-center">
        <div className="space-y-[38px]">
          {/* Botón Inicio */}
          <button className="flex items-center space-y-1 text-sm">
            <img src={IconHome} alt="casa" className="w-10 h-10" />
            <span>Inicio</span>
          </button>

          {/* Botón Buscar */}
          <button
            className={`flex items-center space-y-1 text-sm ${searchActive ? activeButtonStyle : ""}`}
            onClick={() => {
              setSearchActive(!searchActive);
              setNotificationActive(false); // Cerrar el cuadro de notificaciones si está abierto
            }}
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
              <div className="border-[1px] border-[#D9D9D9] absolute w-[450px] left-0 mt-[10px]"></div>
              <div className="mt-4">
                {searchResults.length > 0 ? (
                  <ul className="space-y-2">
                    {searchResults.map((result, index) => (
                      <li key={index} className=" p-2 rounded-md">
                        {result}
                      </li>
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
            <img src={Logo} alt="logo" className="w-28 h-28 relative left-[110px] z-30" />
          </div>

          {/* Botón Notificaciones */}
          <button
            className={`flex items-center space-y-1 text-sm ${notificationActive ? activeButtonStyle : ""}`}
            onClick={() => {
              setNotificationActive(!notificationActive);
              setSearchActive(false); // Cerrar el cuadro de búsqueda si está abierto
            }}
          >
            <img src={IconNotification} alt="notificación" className="w-10 h-10" />
            <span>Notificaciones</span>
          </button>

          {/* Cuadro de notificaciones (condicional) */}
          {notificationActive && (
            <div className="bg-white absolute z-20 rounded-r-lg rounded-none p-4 w-[450px] h-[601px] top-[-40px] left-[200px]">
              <span className="text-[20px] ml-2 pb-3 font-['login']">Notificaciones</span>
              <div className="border-[1px] border-[#D9D9D9] absolute w-[450px] left-0 mt-[15px]"></div>
              {/* Aquí puedes añadir contenido de las notificaciones */}
            </div>
          )}

          {/* Botón Perfil */}
          <button className="flex items-center space-y-1 text-sm">
            <img src={IconProfile} alt="perfil" className="w-10 h-10" />
            <span>Perfil</span>
          </button>

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
