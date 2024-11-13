import IconHome from "../assets/iconoCasa.svg";
import IconSearch from "../assets/search.png";
import IconRegister from "../assets/registro.png";
import IconProfile from "../assets/profile.png";
import Logo from "../assets/logoHome.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function BottomMenu({ setShowCreation }) {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    setShowCreation(true);
  };

  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white border-t-[1px] border-gray-300">
      <nav className="flex justify-around items-center py-[15px] md:py-[20px]">
        {/* Botón Inicio */}
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center"
        >
          <img src={IconHome} alt="casa" className="w-10 h-10 md:w-14 md:h-14" />
        </button>

        {/* Botón Buscar */}
        <button 
          onClick={() => navigate("/Buscar")} // Agrega la ruta si es necesario
          className="flex flex-col items-center"
        >
          <img src={IconSearch} alt="buscar" className="mr-6 w-10 h-10 md:w-14 md:h-14" />
        </button>

        {/* Botón Crear registro */}
        <button 
          onClick={handleCreatePost}
          className="flex flex-col items-center"
        >
          <img src={IconRegister} alt="registro" className="ml-6 w-10 h-10 md:w-14 md:h-14" />
        </button>

        {/* Botón Perfil */}
        <button
          onClick={() => navigate("/Perfil")}
          className="flex flex-col items-center"
        >
          <img src={IconProfile} alt="perfil" className="w-10 h-10 md:w-14 md:h-14" />
        </button>
      </nav>

      <div>
        <img
          src={Logo}
          alt="logo"
          className="w-[88px] h-[88px] md:w-32 md:h-32 absolute bottom-[20px] md:bottom-[30px] left-[155px] md:left-[323px] z-10"
        />
      </div>
    </div>
  );
}

BottomMenu.propTypes = {
  setShowCreation: PropTypes.func.isRequired,
};

export default BottomMenu;
