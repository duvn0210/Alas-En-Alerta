import { useState } from "react";
import casa from "../../assets/casa.svg";
import Logo from "../../assets/Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TemplateRegister (){
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex">
        <div className="w-full flex flex-row bg-gradient-to-t from-[#71CAD2] via-[#71CAD2] to-[#3A686C]">
      {/* Sección izquierda - Formulario register */}
      <div className="w-[800px] bg-white flex flex-col justify-center rounded-r-[48px]">
          <div className="absolute top-0 left-[-10px]">
            <img src={Logo} alt="Pájaro" className="w-[107px] h-[127px]" />
          </div>
          <div className="flex flex-col pt-[100px] items-center">
            <h2 className="text-3xl font-['login'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold text-gray-800 mb-8">
              Crear cuenta
            </h2>
            <form className="w-[350px]">
              <div className="mb-4">
                <input
                  placeholder="Nombre de usuario"
                  type="text"
                  className="w-full border-b focus:outline-none"
                />
              </div>
              <div className="mb-4 pt-8">
                <input
                  placeholder="Correo electronico"
                  type="email"
                  className="w-full border-b focus:outline-none"
                />
              </div>
              <div className="mb-6 pt-8 pb-8 relative">
                <input
                  placeholder="Contraseña"
                  type={passwordVisible ? "text" : "password"}
                  className="w-full border-b pr-10 focus:outline-none"
                />
                <span
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <button className="w-full bg-[#71CAD2] text-white p-2 rounded-full font-semibold hover:bg-[#3A686C] transition">
                Registrate
              </button>
            </form>
            <p className="mt-6 text-gray-600 text-center">
              ¿Ya tienes una cuenta?{" "}
              <a href="/IniciarSesion" className="text-[#71CAD2] font-semibold relative after:block after:absolute after:w-full after:h-[2px] after:bg-[#3A686C] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:bottom-0 after:left-0">
                Inicia Sesión
              </a>
            </p>
          </div>
        </div>
        {/* Sección derecha - Bienvenida */}
      
        <div className="w-[260px] mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-['login'] font-bold text-[#022834] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-2">
            Registrate aquí
          </h1>

          <p className="text-white mb-2 leading-tight">
          y contribuye en nuestra misión de documentar la vida alada.
          </p>
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={casa} alt="Hoja decorativa" className="w-40 h-40" />
        </div>
      </div>
    </div>
  );
    
}
export default TemplateRegister;