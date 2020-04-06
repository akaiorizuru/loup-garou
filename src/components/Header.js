import React from 'react';
import styled from 'styled-components';
import './Layout.css';
import {WolfPackBattalion} from '@styled-icons/fa-brands/WolfPackBattalion';

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width: 100%; 
    padding: 20px 0px; 
    color : white;
    font-size: 30px;
    background-color : #1e3461;
    text-align: center;
    font-family: 'Dancing Script', cursive; 
`;

const LogoLeft = styled(WolfPackBattalion)`
    transform: rotate(-15deg);
    opacity: 0.8;
`;
const LogoRight =styled(LogoLeft)`
    transform: rotate(15deg);
`;

function Header(){
    return (
        <HeaderStyle>
            <LogoLeft size="48" /> Jeux du Loup-garou <LogoRight size="48" />
        </HeaderStyle>
    )
}

export default Header;