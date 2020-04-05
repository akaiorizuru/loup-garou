import React from 'react';
import styled from 'styled-components';
import './Layout.css';

const HeaderStyle = styled.header`
    width: 100%; 
    padding: 20px; 
    color : white;
    font-size: 30px;
    background-color : #1e3461;
    text-align: center;
    font-family: 'Dancing Script', cursive; 
`;

function Header(){
    return (
        <HeaderStyle>Jeux du Loup-garou</HeaderStyle>
    )
}

export default Header;