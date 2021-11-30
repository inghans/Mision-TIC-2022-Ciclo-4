import React from 'react';

const Registro = () => {
    return (
    <body style = {{background: 'rgb(180, 177, 177)'}}>
        <div style = {{textAlign: 'center'}}>
            <div style={{boxShadow: '0px 0px 20px 8px rgba(95, 41, 41, 0.22)', padding: '20px', width: '450px', display: 'inline-block', margin: '30px', backgroundcolor: 'rgb(253, 253, 253)', borderRadius: '5px'}}>
                <h1 style = {{color: 'rgb(54, 54, 54)'}}>REGISTRA TU CUENTA</h1>
                <p style = {{fontSize: 'small'}}><strong>Crea tu propia cuenta y lleva todo el control de tus predios y acuerdos de pago muy fácil</strong></p>
                <div className="alert alert-dark" role="alert">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"></span>
                        <input type="text" className="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"></span>
                        <input type="text" className="form-control" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"></span>
                        <input type="text" className="form-control" placeholder="Documento de identidad" aria-label="Documento de identidad" aria-describedby="addon-wrapping" />
                    </div>
                    <br />                
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"></span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"></span>
                        <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"></span>
                        <input type="text" className="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" for="inlineRadio1">Hombre</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" for="inlineRadio2">Mujer</label>
                    </div>
                    <br />
                    <div>
                        <p style={{font: 'small'}}><strong>Al crear una cuenta, aceptas la Política de Privacidad y los Términos de Uso de nuestro sitio web</strong></p>
                    </div>
                </div> 
                <button type="button" className="btn btn-outline-dark btn-lg">Registrar</button>            
            </div>
        </div>
    </body>
    );
}
export default Registro;