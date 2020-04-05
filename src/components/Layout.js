import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Section = styled.section`
    background-color : #2b7d80;
    padding: 20%;
    color : white;
`;

function Layout (props){
    return (
        <div>
            <Header></Header>
            <Section>
                {props.children}
            </Section>
            <Footer></Footer>
        </div>
    )
}

export default Layout;