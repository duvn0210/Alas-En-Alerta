import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Hojas from "../../assets/plantasLogin.png";
import Logo from "../../assets/Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TemplateLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const URL = import.meta.env.VITE_URL_BASE;

    const data = {
      correo_electronico: email,
      contraseña: password,
    }
    try {
      const resp = await axios.post(`${URL}/login`, data);
      if (resp.status === 200) {
        Swal.fire({
          title: "¡Bienvenido!",
          text: "Inicio de sesión exitoso",
          icon: "success",
          confirmButtonText: "Entendido",
        }).then(() => {
          navigate("/");
        });
      }

    }catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          Swal.fire({
            title: "Error",
            text: "El usuario no ha sido encontrado, por favor verifica tus credenciales",
            icon: "question",
            confirmButtonText: "Entendido",
          });
        }
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo conectar con el servidor. Por favor, intenta más tarde.",
          icon: "error",
          confirmButtonText: "Entendido",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full flex flex-row bg-gradient-to-b from-[#71CAD2] via-[#71CAD2] to-[#3A686C]">
        <div className="w-[260px] mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-['login'] font-bold text-[#022834] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-6 hidden lg:block">
            ¡Bienvenido a Alas en alerta!
          </h1>
          <p className="text-white mb-2 hidden lg:block">
            Conviértete en un guardián del cielo, inicia sesión con tus datos y captura la historia de cada ave.
          </p>
        </div>
        <div className="absolute lg:bottom-0 lg:left-0 bottom-0 left-0 md:bottom-[130px] md:left-[155px]">
          <img src={Hojas} alt="Hoja decorativa" className="w-40 h-40" />
        </div>
        <div className="md:w-[800px] w-[350px] mr-[21px] md:mr-[150px] lg:mr-0 my-12 md:my-[130px] lg:my-0 lg:rounded-none bg-white flex flex-col justify-center rounded-[48px] lg:rounded-l-[48px]">
          <div className="absolute lg:top-0 lg:right-0 md:right-[150px] md:top-28 top-6 right-5">
            <img src={Logo} alt="Pájaro" className="w-[107px] h-[127px]" />
          </div>
          <div className="flex flex-col lg:pt-[100px] pt-[50px] md:pb-[100px] lg:pb-0 items-center">
            <h2 className="text-4xl font-['login'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold text-gray-800 mb-8">
              Inicio de sesión
            </h2>
            <form onSubmit={handleLogin} className="w-[350px] flex flex-col items-center lg:items-stretch">
              <div className="mb-4">
                <input
                  placeholder="Correo electronico"
                  type="email"
                  className="lg:w-full w-[300px] md:text-[20px] border-b focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6 pt-8 pb-8 relative">
                <input
                  placeholder="Contraseña"
                  type={passwordVisible ? "text" : "password"}
                  className="lg:w-full w-[300px] md:text-[20px] border-b pr-10 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button type="submit" className="lg:w-full w-[250px] bg-[#71CAD2] text-white p-2 md:text-[22px] rounded-full font-semibold hover:bg-[#3A686C] transition">
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
