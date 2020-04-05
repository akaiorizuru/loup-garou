import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Section = styled.section`
    background-color : #2b7d80;
    width: 100%;
    padding: 20px;
    color : white;
`;
const Article = styled.article`
    padding: 10%;
`;

function Layout (props){
    return (
        <div>
            <Header></Header>
            <Section>
                <Article>
                    {props.children}
                </Article>
            </Section>
            <Footer></Footer>
        </div>
    )
}

export default Layout;