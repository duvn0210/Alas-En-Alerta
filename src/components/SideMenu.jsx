import IconHome from "../assets/iconoCasa.svg";
import IconSearch from "../assets/search.png";
import IconRegister from "../assets/registro.png";
import IconNotification from "../assets/notification.svg";
import IconProfile from "../assets/profile.png";
import IconInformation from "../assets/information.svg";
import Logo from "../assets/logoHome.png";

function SideMenu() {
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
          <button className="flex items-center space-y-1 text-sm">
            <img src={IconSearch} alt="buscar" className="w-10 h-10" />
            <span>Buscar</span>
          </button>

          {/* Botón Crear registro con el ícono de pájaro */}
          <button className="flex items-center space-y-2 text-sm">
            <img src={IconRegister} alt="registro" className="w-10 h-10" />
            <span>Crear registro</span>
          </button>

          <div>
            <img
              src={Logo}
              alt="logo"
              className="w-28 h-28 relative left-[110px] z-10"
            />
          </div>

          {/* Botón Notificaciones */}
          <button className="flex  items-center space-y-1 text-sm">
            <img
              src={IconNotification}
              alt="notificación"
              className="w-10 h-10"
            />
            <span>Notificaciones</span>
          </button>

          {/* Botón Perfil */}
          <button className="flex items-center space-y-1 text-sm">
            <img src={IconProfile} alt="perfil" className="w-10 h-10" />
            <span>Perfil</span>
          </button>

          <button className="flex items-center space-y-1 text-sm mt-4">
            <img
              src={IconInformation}
              alt="información"
              className="w-10 h-10"
            />
            <span>Información</span>
          </button>
        </div>
        <div className="border-[0.5px] border-[#022834] h-full absolute ml-[200px]"></div>
      </aside>
    </div>
  );
}

export default SideMenu;
