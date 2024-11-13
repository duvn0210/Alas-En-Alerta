import avatar1 from '../../assets/avatar1.png';
import pajaro1 from '../../assets/pajaro1.png';
import pajaro2 from '../../assets/pajaro2.png';
import SideMenu from '../../components/sideMenu';
import BottomMenu from "../../components/BottomMenu";


function TemplateProfile() {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Menú lateral */}
            <div className="w-full md:w-[200px]">
                <SideMenu />
            </div>
            
            {/* Contenido del perfil */}
            <div className="flex-grow p-4 md:p-6 md:ml-[50px] md:mr-[200px]">
                {/* Sección de perfil */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
                    {/* Imagen de perfil */}
                    <div className="flex items-center space-x-4">
                        <img
                            src={avatar1}
                            alt="Avatar"
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
                        />
                        <div>
                            <div className="flex lg:flex-col flex-row md:flex-col items-center md:items-start">
                                <h1 className="text-lg md:text-xl font-bold mr-[10px] lg:mr-0">@Ana_g_seg</h1>
                                <button className="px-3 py-1 md:px-6 md:py-2 mt-2 md:mt-2 bg-[#D7F2E4] text-[#78CFA3] rounded-full">
                                    Editar perfil
                                </button>
                            </div>
                            <span className="text-sm text-gray-500">Estudiante</span>
                            <div className="mt-2 md:mt-4">
                                <p className="text-xs md:text-sm text-gray-500">
                                    Apasionado por las aves 🌱
                                </p>
                                <p className="text-xs md:text-sm text-gray-500">
                                    Ecatepec de Morelos, Estado de México
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Estadísticas */}
                    <div className="flex space-x-4 md:space-x-8 text-center mt-4 md:mt-0">
                        <div>
                            <h2 className="text-md md:text-lg font-semibold">12</h2>
                            <span className="text-xs md:text-sm text-gray-500">Publicaciones</span>
                        </div>
                        <div>
                            <h2 className="text-md md:text-lg font-semibold">22</h2>
                            <span className="text-xs md:text-sm text-gray-500">Seguidores</span>
                        </div>
                        <div>
                            <h2 className="text-md md:text-lg font-semibold">20</h2>
                            <span className="text-xs md:text-sm text-gray-500">Seguidos</span>
                        </div>
                    </div>
                </div>

                {/* Publicaciones */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    {/* Publicación 1 */}
                    <div className="bg-white w-full md:w-[300px] p-4 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img
                                src={avatar1}
                                alt="Avatar"
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                            />
                            <div>
                                <h2 className="font-semibold">@Ana_g_seg</h2>
                                <span className="text-xs md:text-sm text-gray-500">12 Octubre 2024</span>
                            </div>
                        </div>
                        <img
                            src={pajaro1}
                            alt="Publicación"
                            className="w-full h-48 md:h-60 mt-4 object-cover rounded-lg"
                        />
                        <p className="mt-2 font-semibold">Cárabo rufo</p>
                    </div>

                    {/* Publicación 2 */}
                    <div className="bg-white w-full md:w-[300px] p-4 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <img
                                src={avatar1}
                                alt="Avatar"
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                            />
                            <div>
                                <h2 className="font-semibold">@Ana_g_seg</h2>
                                <span className="text-xs md:text-sm text-gray-500">11 Octubre 2024</span>
                            </div>
                        </div>
                        <img
                            src={pajaro2}
                            alt="Publicación"
                            className="w-full h-48 md:h-60 mt-4 object-cover rounded-lg"
                        />
                        <p className="mt-2 font-semibold">Pájaro carpintero</p>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
}

export default TemplateProfile;
