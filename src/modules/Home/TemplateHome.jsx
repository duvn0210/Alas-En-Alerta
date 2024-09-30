import MapSection from "../../components/MapSection";
import SideMenu from "../../components/sideMenu";
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import pajaro1 from '../../assets/pajaro1.png';
import pajaro2 from '../../assets/pajaro2.png';

function TemplateHome() {
    return (
      <div className="flex h-screen">
        {/* Menú lateral */}
        <SideMenu/>
        {/* Contenido Principal */}
        <div className="w-full bg-gray-50 p-6 overflow-y-auto">  
          {/* Publicaciones */}
          <div className="space-y-6 ml-[200px]">
            {/* Publicación 1 */}
            <div className="bg-[#e1e5e7] rounded-lg p-4 w-[400px] min-h-[500px] flex flex-col justify-between">
              <div className="flex items-center space-x-4">
                <img src={avatar1} alt="avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">@ana.g_seg</p>
                  <p className="text-[10px] text-zinc-700">Estudiante</p>
                </div>
              </div>
              <img src={pajaro1} alt="bird" className="w-full h-[380px] rounded-lg mt-4" />
              <p className="text-sm mt-2">Colibrí rufo</p>
              <p className="text-sm">Biblioteca UNAC</p>
              <p className="text-sm">19/08/2024</p>
            </div>
  
            {/* Publicación 2 */}
            <div className="bg-[#e1e5e7] rounded-lg p-4 w-[400px] min-h-[500px] flex flex-col justify-between">
              <div className="flex items-center space-x-4">
                <img src={avatar2} alt="avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">@mayerly.s</p>
                  <p className="text-[10px] text-zinc-700">Visitante</p>
                </div>
              </div>
              <img src={pajaro2} alt="bird" className="w-full h-[380px] rounded-lg mt-4" />
              <p className="text-sm mt-2">Ave desconocida</p>
              <p className="text-sm">Biblioteca UNAC</p>
              <p className="text-sm">09/08/2024</p>
            </div>
          </div>
        </div>
  
        {/* Sección del mapa */}
        <MapSection/>
      </div>
    );
  }
  
  export default TemplateHome;

  