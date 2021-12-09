import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './components/css/App.css';
import './components/css/estilos.css';
import './components/css/estilos_login.css';
import Index from './components/Index/Index';
import InicioSesion from "./components/InicioSesion/InicioSesion"
import Registro from "./components/Registro";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path="/" element = {<Index />} />
          <Route path="/registro" element = {<Registro />} />
          <Route path="/login" element = {<InicioSesion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;