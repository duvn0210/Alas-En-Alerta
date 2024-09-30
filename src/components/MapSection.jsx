import mapa from '../assets/UnacDron.png'

function MapSection() {
  return (
    <div className="w-[317px] bg-gray-200 relative">
      <h2 className="text-lg font-semibold absolute top-4 left-4">Alas en alerta</h2>
      {/* Simulación de un mapa */}
      <img
        src={mapa}
        alt="Mapa"
        className="w-full mt-[50px] h-[549px] rounded-[20px] object-cover"
      />
      {/* Menú hamburguesa */}
      <button className="absolute top-4 right-4">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
}

export default MapSection;
