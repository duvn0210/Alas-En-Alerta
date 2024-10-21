import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/IniciarSesion' element={<Login/>} />
      <Route path='/Registrarse' element={<Register/>} />
      <Route path='/Perfil' element={<Profile/>} />
    </Routes>
  )
}

export default App
