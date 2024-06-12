import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Mostrar } from './components/Mostrar'
import { Altas } from './components/Altas'
import { Buscar } from './components/Buscar'
//import { Insertar_Cliente } from './components/Home'
//import { Insertar_Producto } from './components/Mostrar'
//import { Insertar_Venta } from './components/Altas'
//import { Buscar_Cliente } from './components/Buscar'
//import { Buscar_Producto } from './components/Buscar'
//import { Buscar_Venta } from './components/Buscar'
import './App.css'

function App() {
  return (
    <>
      <div className='w3-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mostrar" element={<Mostrar/>}></Route>
          <Route path="/altas" element={<Altas/>}></Route>
          <Route path="/buscar" element={<Buscar/>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
