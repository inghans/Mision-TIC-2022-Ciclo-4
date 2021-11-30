import React from 'react';
import area from './img/area.jpg';
import logo from './img/logo.jpg';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

const Index = () => {
    return(
    <body>
        {/* <!--Cabecera--> */}
        <div className="menu">
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
                    <a href="" className="btn btn-outline-dark ">Ingresar</a>
                </div>
            </div>
        </div>
        <br /><br />
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
        <br /><br />
        {/* <!--Iconos --> */}
        <div className="container">
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
        <br />
        <div className="container">
            <h3>Pensando en ti te recomendamos</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" >
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Base gravable para predios sin avalúo catastral</h5>
                            <p className="card-text">La base gravable mínima que regirá para el año 2021, conforme a lo dispuesto en la Resolución SDH-000597 del 30 de diciembre de 2020, será la de los valores por metro cuadrado contenidos en la siguiente tabla</p>
                            <a href="#" className="btn btn-outline-dark">Conoce más...</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Cómo se calcula el impuesto Predial</h5>
                        <p className="card-text">Para liquidar el impuesto predial, se deben tener en cuenta paso a paso los siguientes elementos.</p>
                        <a href="#" className="btn btn-outline-dark">Conoce más...</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">QUIERO PAGAR POR CUOTAS </h5>
                            <p className="card-text">Acogete al pago por cuotas del predial 2021, presenta tu declaración antes de diciembre.</p>
                            <a href="#" className="btn  btn-outline-dark">Conoce más...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
        <div className="container">
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
        </div>
        <br /><br />
        {/* <!--Pie de Pagina--> */}
        <div className="pie-pagina">
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
    </div>
    </body>
    );
}
export default Index;