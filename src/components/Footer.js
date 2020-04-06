import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 20px 0px; 
    color : white;
    font-size: 15px;
    background-color : #1e3461;
    text-align: center;
    font-family: 'Dancing Script', cursive; 
`;

const Ul = styled.ul`
    list-style-type: none;
`;

function Footer(){
    return (
        <FooterStyle>
            <Ul>
                <li>Jeux du Loup-garou</li>
                <li>Poublier par : studio MMI</li>
                <li>Contacter : studioMMI@mmi.web</li>
            </Ul>
        </FooterStyle>
    )
}
export default Footer;