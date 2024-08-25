import { useState } from "react";
import Hojas from "../../assets/plantasLogin.png";
import Logo from "../../assets/Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TemplateLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sección izquierda - Bienvenida */}
      <div className="w-full flex flex-row bg-gradient-to-b from-[#71CAD2] via-[#71CAD2] to-[#3A686C]">
        <div className="w-[260px] mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-['login'] font-bold text-[#022834] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-6">
            ¡Bienvenido a Alas en alerta!
          </h1>

          <p className="text-white mb-2">
            Conviértete en un guardián del cielo, inicia sesión con tus datos y
            captura la historia de cada ave.
          </p>
        </div>

        <div className="absolute bottom-0 left-0">
          <img src={Hojas} alt="Hoja decorativa" className="w-40 h-40" />
        </div>

        {/* Sección derecha - Formulario de inicio de sesión */}
        <div className="w-[800px] bg-white p-12 flex flex-col justify-center rounded-l-[48px]">
          <div className="absolute top-0 right-0">
            <img src={Logo} alt="Pájaro" className="w-[107px] h-[127px]" />
          </div>
          <div className="flex flex-col pt-[100px] items-center">
            <h2 className="text-3xl font-['login'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold text-gray-800 mb-8">
              Inicio de sesión
            </h2>
            <form className="w-[350px]">
              <div className="mb-4">
                <input
                  placeholder="Usuario"
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
                Inicia sesión
              </button>
            </form>
            <p className="mt-6 text-gray-600 text-center">
              ¿No tienes una cuenta?{" "}
              <a href="/Registrarse" className="text-[#71CAD2] font-semibold relative after:block after:absolute after:w-full after:h-[2px] after:bg-[#3A686C] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:bottom-0 after:left-0">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateLogin;
