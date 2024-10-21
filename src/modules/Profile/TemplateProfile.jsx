import avatar1 from '../../assets/avatar1.png';
import pajaro1 from '../../assets/pajaro1.png';
import pajaro2 from '../../assets/pajaro2.png';
import SideMenu from '../../components/sideMenu';

function TemplateProfile() {
    return (
    <div className="flex">
        {/* Menú lateral */}
        <div className="w-[200px]">
            <SideMenu />
        </div>
        
        {/* Contenido del perfil */}
        <div className="flex-grow p-6 ml-[50px]">
            {/* Sección de perfil */}
            <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 mb-6">
                {/* Imagen de perfil */}
                <div className="flex items-center space-x-4">
                    <img
                        src={avatar1}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold">@Ana_g_seg</h1>
                            <button className="px-4 py-2 ml-6 bg-[#D7F2E4] text-[#78CFA3] rounded-full">
                                Editar perfil
                            </button>
                        </div>
                        <span className="text-sm text-gray-500">Estudiante</span>
                        <div className="mt-4">
                            <p className="text-sm text-gray-500">
                                Apasionado por las aves 🌱
                            </p>
                            <p className="text-sm text-gray-500">
                                Ecatepec de Morelos, Estado de México
                            </p>
                        </div>
                    </div>
                </div>

                {/* Estadísticas */}
                <div className="flex space-x-8 text-center">
                    <div>
                        <h2 className="text-lg font-semibold">12</h2>
                        <span className="text-sm text-gray-500">Publicaciones</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">22</h2>
                        <span className="text-sm text-gray-500">Seguidores</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">20</h2>
                        <span className="text-sm text-gray-500">Seguidos</span>
                    </div>
                </div>
            </div>

            {/* Publicaciones */}
            <div className="flex space-x-4">
                {/* Publicación 1 */}
                <div className="bg-white w-[300px] p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img
                            src={avatar1}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h2 className="font-semibold">@Ana_g_seg</h2>
                            <span className="text-sm text-gray-500">12 Octubre 2024</span>
                        </div>
                    </div>
                    <img
                        src={pajaro1}
                        alt="Publicación"
                        className="w-full h-60 mt-4 object-cover rounded-lg"
                    />
                    <p className="mt-2 font-semibold">Cárabo rufo</p>
                </div>

                {/* Publicación 2 */}
                <div className="bg-white p-4 w-[300px] rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img
                            src={avatar1}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h2 className="font-semibold">@Ana_g_seg</h2>
                            <span className="text-sm text-gray-500">11 Octubre 2024</span>
                        </div>
                    </div>
                    <img
                        src={pajaro2}
                        alt="Publicación"
                        className="w-full h-60 mt-4 object-cover rounded-lg"
                    />
                    <p className="mt-2 font-semibold">Pájaro carpintero</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TemplateProfile;
