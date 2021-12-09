import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

function home_lower_body(){
    return(
<><div className="container">
    <h3>Pensando en ti te recomendamos</h3>
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Base gravable para predios sin avalúo catastral</h5>
                    <p className="card-text">La base gravable mínima que regirá para el año 2021, conforme a lo dispuesto en la Resolución SDH-000597 del 30 de diciembre de 2020, será la de los valores por metro cuadrado contenidos en la siguiente tabla</p>
                    <a href="#" className="btn btn-outline-dark">Conoce más...</a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cómo se calcula el impuesto Predial</h5>
                    <p className="card-text">Para liquidar el impuesto predial, se deben tener en cuenta paso a paso los siguientes elementos.</p>
                    <a href="#" className="btn btn-outline-dark">Conoce más...</a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <img src={img3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">QUIERO PAGAR POR CUOTAS </h5>
                    <p className="card-text">Acogete al pago por cuotas del predial 2021, presenta tu declaración antes de diciembre.</p>
                    <a href="#" className="btn  btn-outline-dark">Conoce más...</a>
                </div>
            </div>
        </div>
    </div>
</div><br /><br /><div className="container">
    <h3 className="text-center">¿Aún tienes dudas?</h3>
    <br /><br />
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2 text-center">
            <h3><i className="bi bi-geo-alt"></i></h3>
            <p><small>Puntos de atención</small><br /><a href="#" className="text-menu">Visitanos</a></p>
        </div>
        <div className="col-md-2 text-center">
            <h3><i className="bi bi-chat-dots"></i></h3>
            <p><small>Chat en línea</small><br /><a href="#" className="text-menu">Escríbenos</a></p>
        </div>
        <div className="col-md-2 text-center">
            <h3><i className="bi bi-telephone"></i></h3>
            <p><small>Llámanos a nuestra línea</small><br /><a href="#" className="text-menu">018000 91 0090</a></p>
        </div>
        <div className="col-md-2 text-center">
            <h3><i className="bi bi-phone"></i></h3>
            <p><small>Prefieres que te llamemos</small><br /><a href="#" className="text-menu">Cuando quieras</a></p>
        </div>
        <div className="col-md-2 text-center">
            <h3><i className="bi bi-volume-up"></i></h3>
            <p><small>Contáctanos por redes sociales</small><br /><a href="#" className="text-menu">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-whatsapp"></i>
            </a></p>
        </div>
        <div className="col-md-1"></div>
    </div>
</div></>
    )
}
export default home_lower_body