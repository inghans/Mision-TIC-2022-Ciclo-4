import React from 'react';
import header_and_menu from './header_and_menu';
import home_upper_body from './home_upper_body';
import icons from './icons';
import home_lower_body from './home_lower_body';
import footer from './footer';

function Index(){
    return(
    <body>
        {header_and_menu()}
        <br /><br />
        {home_upper_body()}
        <br /><br />
        {icons()}
        <br />
        {home_lower_body()}
        <br /><br />
        {footer()}
    </body>
    )
}
export default Index