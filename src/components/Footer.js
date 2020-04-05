import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    width: 100%; 
    padding: 20px; 
    color : white;
    font-size: 10px;
    background-color : #1e3461;
    text-align: center;
    font-family: 'Dancing Script', cursive; 
`;

function Footer(){
    return (
        <FooterStyle>Jeux du Loup-garou</FooterStyle>
    )
}
export default Footer;