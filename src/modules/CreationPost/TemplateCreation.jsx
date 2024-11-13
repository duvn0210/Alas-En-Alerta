import { useState } from 'react'; 
import PropTypes from 'prop-types'; 
import avatar1 from "../../assets/avatar1.png";

const TemplateCreation = ({ addPost }) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreatePost = () => {
    if (image && description) {
      const newPost = {
        id: Date.now(),
        user: '@Ana_g_seg',
        role: 'Estudiante',
        postImage: image,
        avatar: avatar1,
        description,
        date: new Date().toLocaleDateString(),
        location: 'Biblioteca UNAC',
      };
      addPost(newPost);  // Se llama a addPost aquí
      setDescription('');
      setImage(null);
    } else {
      alert('Por favor, añade una imagen y descripción');
    }
  };

  return (
    <div className='flex h-screen'>
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-blue-100 to-blue-50 lg:p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Crear Nuevo Post</h2>
          
          <div className="mb-4">
            {image ? (
              <img src={image} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Previsualización de la imagen</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mt-2 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Añadir una descripción..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
            rows="3"
          />

          <button
            onClick={handleCreatePost}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

TemplateCreation.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default TemplateCreation;
