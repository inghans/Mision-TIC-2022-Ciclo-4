import React from 'react';
import area from '../img/area.jpg';

function home_upper_body(){
    return(
<div className="container">
    <div className="row">
        <div className="col-md-5">
            <h5>Paga Puntual y Gana Descuentos</h5>
            <h1>INSCRIPCIÓN DE PREDIOS Y AVISOS CATASTRALES</h1>
            <p>Pago que todo propietario, poseedor o quien disfrute del bien ajeno debe realizar sobre los bienes inmuebles o predios ubicados en la respectiva jurisdicción del municipio o Distrito</p>
            <a href="" className="btn btn-warning">Conoce Cómo</a>
        </div>
        <div className="col-md-7">
            <img src={area} alt="" />
        </div>
    </div>
</div>
    )
}
export default home_upper_body