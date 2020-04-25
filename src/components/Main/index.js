import React from 'react';
import {Link} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import {About} from '../routes/Play'

export default function Main() {
    return(
        <Container>
            <GlobalStyle />
            {/* <P>PL<PlayButton>▶︎</PlayButton>Y</P> */}
            <P>PL<About>▶︎</About>Y</P>
            <P>Naegle [내글]</P>
            <div style={{marginTop:100}}>
                {/* <ItemButton to="/">Main</ItemButton> */}
                <ItemButton to="/button">Button</ItemButton>
                <ItemButton to="check-box">CheckBox</ItemButton>
            </div>
        </Container>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #cf6a87;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-top: 70px;
    background-color: yellow;
`;

const ItemButton = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: #3E2723;
    margin: 50px;
    /* margin: 200px 50px 0 50px; */
    background-color: green;
`;

const P = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 15px;
    margin: 10px;
    background-color: orange;
`;

const PlayButton = styled.button`
    border-style: none;
    font-size: 60px;
    font-weight: 800;
    background-color: orange;
`;
// const ItemContent = styled.div`
//     width: 50px;
//     /* margin-top: 100px; */
//     background-color: tomato;
// `;