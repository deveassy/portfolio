import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
    return(
        <Container>
            <AboutButton to="/about">
            <P>PL▶︎Y</P>
            <P>Naegle [ 내글ː]</P>
            </AboutButton>
            <div style={{marginTop:100}}>
                {/* <ItemButton to="/">Main</ItemButton> */}
                <ItemButton to="/button">Button</ItemButton>
                <ItemButton to="/check-box">CheckBox</ItemButton>
                <ItemButton to="/popover">Popover</ItemButton>
            </div>
        </Container>
    )
}

// const GlobalStyle = createGlobalStyle`
//     body {
//         margin: 0;
//         padding: 0;
//         background-color: #cf6a87;
//     }
// `;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 100%;
    height: 500px; */
    margin-top: 70px;
    background-color: yellow;
`;

const AboutButton = styled(Link)`
    text-decoration: none;
    font-size: 80px;
    background-color: pink;
`;

const ItemButton = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: #3E2723;
    margin: 50px;
    background-color: green;
`;

const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 70px;
    font-weight: 800;
    margin: 10px;
`;