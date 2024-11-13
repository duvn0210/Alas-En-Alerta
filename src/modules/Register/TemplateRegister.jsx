import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import casa from "../../assets/casa.svg";
import Logo from "../../assets/Logo.png";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TemplateRegister() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState(""); // Ajusta según el tipo de usuario requerido
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const URL = import.meta.env.VITE_URL_BASE;

    const data = {
      nombre_usuario: nombreUsuario,
      correo_electronico: correoElectronico,
      contraseña,
      tipo_usuario: tipoUsuario,
    }

    await axios.post(`${URL}/register`, data)
      .then((resp) => {
        if (resp.status == 200) {
          swal.fire({
            title: '¡Bienvenido!',
            text: 'Registro exitoso',
            icon: 'success',
            confirmButtonText: 'Entendido'
        }).then(() => {
            navigate("/iniciarSesion");
        });
        }
      })
      .catch((err) => {
        console.log(err);
        swal.fire({
          title: 'Error',
          text: 'Hubo un problema al registrarse. Por favor, verifica tus credenciales e intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Entendido'
      })
          
      })

  }

  return (
    <div className="min-h-screen flex">
      <div className="w-full flex flex-row bg-gradient-to-t from-[#71CAD2] via-[#71CAD2] to-[#3A686C]">
        <div className="w-[800px] bg-white flex flex-col justify-center rounded-[48px] lg:rounded-r-[48px] lg:rounded-none ml-[18px] my-12 md:ml-[140px] md:my-[130px] lg:ml-0 lg:my-0">
          <div className="absolute lg:top-0 top-[40px] lg:left-[-10px] md:left-[130px] md:top-[120px] left-[6px]">
            <img src={Logo} alt="Pájaro" className="w-[107px] h-[127px]" />
          </div>
          <div className="flex flex-col lg:pt-[100px] lg:pb-0 md:pb-[100px] pt-[50px] items-center">
            <h2 className="text-3xl font-['login'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold text-gray-800 mb-8">
              Crear cuenta
            </h2>
            <form onSubmit={handleRegister} className="w-[350px] flex flex-col items-center lg:items-stretch">
              <div className="mb-4">
                <input
                  placeholder="Nombre de usuario"
                  type="text"
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)}
                  className="lg:w-full w-[300px] border-b md:text-[20px] focus:outline-none"
                />
              </div>
              <div className="mb-4 pt-8">
                <input
                  placeholder="Correo electronico"
                  type="email"
                  value={correoElectronico}
                  onChange={(e) => setCorreoElectronico(e.target.value)}
                  className="lg:w-full w-[300px] border-b md:text-[20px] focus:outline-none"
                />
              </div>
              <div className="mb-4 pt-8">
                <input
                  placeholder="Tipo de usuario"
                  type="text"
                  value={tipoUsuario}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                  className="lg:w-full w-[300px] border-b md:text-[20px] focus:outline-none"
                />
              </div>
              <div className="mb-6 pt-8 pb-8 relative">
                <input
                  placeholder="Contraseña"
                  type={passwordVisible ? "text" : "password"}
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  className="lg:w-full w-[300px] border-b pr-10 md:text-[20px] focus:outline-none"
                />
                <span
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button
                type="submit"
                className="lg:w-full w-[250px] bg-[#71CAD2] text-white p-2 md:text-[22px] rounded-full font-semibold hover:bg-[#3A686C] transition"
              >
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
        <div className="w-[260px] mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-['login'] font-bold text-[#022834] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-2 hidden lg:block">
            Registrate aquí
          </h1>
          <p className="text-white mb-2 leading-tight hidden lg:block">
            y contribuye en nuestra misión de documentar la vida alada.
          </p>
        </div>
        <div className="absolute lg:right-0 lg:bottom-0 bottom-0 right-[-20px] md:block md:bottom-[130px] md:right-[168px] lg:block">
          <img src={casa} alt="Hoja decorativa" className="w-28 h-28 md:w-40 md:h-40" />
        </div>
      </div>
    </div>
  );
}


export default TemplateRegister;
