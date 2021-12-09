import React from 'react';

function footer(){
    return(

<div className="pie-pagina">
    {/* <!--Pie de Pagina--> */}
    <div className="container">
        <div className="row">
        <div className="col-md-3">
            <h6><strong>Personas</strong></h6>
            <ul className="text-pie">
                <li>Catastro</li>
                <li>Beneficios</li>
                <li>Impuestos</li>
                <li>Convenio</li>
                <li>Pagos</li>
            </ul>
        </div>
        <div className="col-md-3">
            <h6><strong>Te puede interesar</strong></h6>
            <ul className="text-pie">
                <li>Educacion financiera</li>
                <li>Servicios Catastrales</li>
                <li>El valor catastral</li>
                <li>Condiciones de uso</li>
            </ul>
        </div>
        <div className="col-md-3">
            <h6><strong>Katastronk</strong></h6>
            <ul className="text-pie">
                <li>Accesibilidad</li>
                <li>Mapa del sitio</li>
                <li>Preguntas frecuentes</li>
                <li>Soporte Jurídico</li>
            </ul>
        </div>
        <div className="col-md-3">
            <h6><strong>Contáctanos</strong></h6>
            <p className="text-pie">
                Km 5, antigua Vía a Puerto Colombia Barranquilla, Atlántico, Colombia<br />
                Tel. (5) 3509509<br />
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-whatsapp"></i>
            </p>
        </div>
    </div>
    </div>
</div>
    )
}
export default footer