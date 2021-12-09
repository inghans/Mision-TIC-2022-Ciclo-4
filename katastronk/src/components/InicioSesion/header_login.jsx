import React from 'react';
import logo from '../img/logo.jpg';

const header_login = () => {
    return(
<><img src={logo} />
<h6>Sucursal Virtual de Katastronk</h6><br />
<div className="fondo-titulo-login">
    <h6>Inicio de Sesión</h6>
</div></>
    );
}
export default header_login