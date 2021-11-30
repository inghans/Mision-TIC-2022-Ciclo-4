import React from 'react';

const InicioSesion = () => {
    return (
    <body style={{backgroundcolor: "rgb(180, 177, 177)"}}>    
    <div style={{textAlign: "center"}}>
        <div style={{boxShadow: '-moz-initial', padding: '20px', width: '450px', display: 'inline-block', margin: '30px', backgroundColor:'darkgray', borderRadius: '5px'}}>
            <h1 style={{color: "rgb(54, 54, 54)"}}>INGRESA TU CUENTA</h1>
            <div className="alert alert-dark" role="alert">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"></span>
                    <input type="text" className="form-control" placeholder="Email/Usuario" aria-label="Email/Usuario" aria-describedby="addon-wrapping" />
                </div>
                <br />
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"></span>
                    <input type="text" className="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="addon-wrapping" />
                </div>
                <br />
                <div>
                    <p style={{fontSize: 'small'}}><strong>Al crearte una cuenta, aceptas la Política de Privacidad y los Términos de uso de nuestro sitio</strong></p>
                </div>
            </div>
            <button type="button" className="btn btn-outline-dark btn-lg">Iniciar sesión</button>            
        </div>
    </div>
    <div style={{textAlign: 'center'}}>
        <p><strong>No tienes una cuenta? <u style ={{color: 'brown'}}>Crea una</u></strong></p>     
    </div>
    </body>
    );
}
export default InicioSesion;