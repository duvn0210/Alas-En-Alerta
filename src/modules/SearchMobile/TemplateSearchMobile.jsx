import { useState } from 'react';
import IconSearch from "../../assets/search.png";
import BottomMenu from '../../components/BottomMenu';

function TemplateSearchMobile() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter' && searchTerm.trim() !== '') {
            setSearchResults([searchTerm, ...searchResults]);
            setSearchTerm(''); // Limpiar el input
        }
    };

    // Aquí creas una función vacía para pasarla como prop
    const setShowCreation = () => {};

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4 lg:hidden">
            <header className="flex items-center justify-between w-full mb-4">
                <h1 className="text-lg font-bold md:text-3xl">Buscar</h1>
                <img src={IconSearch} alt="buscar" className="w-6 h-6 md:w-12 md:h-12" />
            </header>

            {/* Cuadro de búsqueda siempre visible */}
            <div className="w-full">
                <span className="block text-lg font-medium mb-2 md:text-2xl">Buscar registros</span>
                <input
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleSearchKeyPress}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4 md:h-[55px] md:text-2xl"
                />
                <div className="flex flex-col gap-2">
                    {searchResults.map((result, index) => (
                        <div key={index} className="bg-white p-2 rounded shadow md:h-[50px] md:text-[22px]">
                            {result}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Aquí pasas la función como prop */}
            <BottomMenu setShowCreation={setShowCreation} />
        </div>
    );
}

export default TemplateSearchMobile;
