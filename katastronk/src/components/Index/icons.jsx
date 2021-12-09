import React from 'react';

function icons(){
    return(
<div className="container">
    {/* <!--Iconos --> */}
<div className="card">
    <div className="card-body">
<div className="row">
    <div className="col-md-3 text-center">
        <h1 ><i className="bi bi-person-check"></i></h1>
        <h5>Estoy Registrado</h5>
    </div>
    <div className="col-md-3 text-center">
        <h1><i className="bi bi-person-x"></i></h1>
        <h5>No Estoy Registrado</h5>
    </div>
    <div className="col-md-3 text-center">
        <h1><i className="bi bi-clipboard-check"></i></h1>
        <h5>Mi Factura</h5>
    </div>
    <div className="col-md-3 text-center">
        <h1><i className="bi bi-currency-dollar"></i></h1>
        <h5>Pagar a Cuotas</h5>
    </div>
</div>
    </div>
</div>
</div>
    )
}
export default icons