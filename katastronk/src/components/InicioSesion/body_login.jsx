import React from 'react';
import {Link} from 'react-router-dom'
import img_login from '../img/img_login.jpg'

const body_login = () => {
    return(
<div class="row">
    <div class="col-md-3">
        <div class="fondo-login">
            <h6 class="fondo-titulo-login">Usuario</h6>
            <div class="fondo-text-login"><p><small>Ingresa con tu usuario asignado o correo electronico</small></p></div>
            <div class="box-form">
                <form>
                    <div class="mb-3">                          
                        <input type="email" class="form-control" placeholder="Usuario o Correo" />                          
                    </div>
                    <div class="mb-3">                          
                        <input type="password" class="form-control" placeholder="Contraseña" />
                    </div>                        
                    <button type="submit" class="btn btn-warning ">Continuar</button>
                </form>
            </div>
            <p class="text-center"><ul class="text-menu"><li class="text-menu"><Link to="/registro">Registrate creando una cuenta</Link></li></ul></p>
            <p class="text-center"><a href="#" class="text-menu">¿Problemas para conectarte?</a></p>
        </div>
        <br />
        <div class="fondo-login margen-login">
            <p><a href="#" class="text-menu"><i class="bi bi-pc-display-horizontal"></i> Katastronk Demo</a></p>
            <p><a href="#" class="text-menu"><i class="bi bi-file-ruled"></i> Reglamento Katastronk App</a></p>
            <p><a href="#" class="text-menu"><i class="bi bi-diagram-3"></i> Politica de Privacidad</a></p>
        </div>
    </div>
    <div class="col-md-9">
        <img src={img_login} />
    </div>
</div>
    );
}
export default body_login