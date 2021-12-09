import React from 'react';
import header_login from './header_login'
import body_login from './body_login'
import footer from '../Index/footer'

function InicioSesion(){
    return(
        <body>
            <div className="container">
                {header_login()}
                <br />
                {body_login()}
                <br />
            </div>
            {footer()}    
        </body>
    )
}
export default InicioSesion