// TemplateHome.js
import { useState } from "react";
import MapSection from "../../components/MapSection";
import SideMenu from "../../components/sideMenu";
import BottomMenu from "../../components/BottomMenu";
import TemplateCreation from "../CreationPost/TemplateCreation";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import pajaro1 from "../../assets/pajaro1.png";
import pajaro2 from "../../assets/pajaro2.png";

function TemplateHome() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: '@ana.g_seg',
      role: 'Estudiante',
      avatar: avatar1, 
      postImage: pajaro1,
      description: 'Colibrí rufo',
      location: 'Biblioteca UNAC',
      date: '19/08/2024',
    },
    {
      id: 2,
      user: '@mayerly.s',
      role: 'Visitante',
      avatar: avatar2,
      postImage: pajaro2,
      description: 'Ave desconocida',
      location: 'Biblioteca UNAC',
      date: '09/08/2024',
    }
  ]);
  
  const [showCreation, setShowCreation] = useState(false);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setShowCreation(false);
  };

  return (
    <div className="flex h-screen">
      <SideMenu setShowCreation={setShowCreation} addPost={addPost} /> {/* Asegúrate de pasar addPost */}
      <div className="w-full bg-gray-50 lg:p-6 overflow-y-auto">
        {showCreation && <TemplateCreation addPost={addPost} />} {/* También se pasa aquí */}
        
        <div className="space-y-6 md:ml-[80px] lg:ml-[200px] mt-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#e1e5e7] rounded-lg p-4 md:w-[600px] lg:w-[400px] min-h-[500px] flex flex-col justify-between">
              <div className="flex items-center space-x-4">
                <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{post.user}</p>
                  <p className="text-[10px] text-zinc-700">{post.role}</p>
                </div>
              </div>
              <img src={post.postImage} alt="post" className="w-full h-[380px] rounded-lg mt-4" />
              <p className="text-sm mt-2">{post.description}</p>
              <p className="text-sm">{post.location}</p>
              <p className="text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
      <MapSection />
      <BottomMenu  setShowCreation={setShowCreation} />
    </div>
  );
}

export default TemplateHome;
