import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/logo.jpg';

function header_and_menu(){
    return(
<div className="menu">
{/* <!--Cabecera--> */}
<div className="container">
    <div className="row">
        <div className="col-md-2">
            <img src={logo} alt="" />
        </div>
        <div className="col-md-6">
            {/* <!--menu--> */}
            <ul className="nav">
                <li className="nav-item">
                <a className="nav-link  text-menu" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-menu" href="#">Tramites</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-menu" href="#">Impuestos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-menu">Economia y Finanzas</a>
                </li>
            </ul>                
        </div>
        <div className="col-md-4">
            <ul className="btn btn-outline-dark">
                <li><Link to="/login">Ingresar</Link></li>
            </ul>
        </div>
    </div>
</div>
</div>
)
}
export default header_and_menu