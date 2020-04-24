import React from 'react';
import {Link} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';

export default function Main() {
    return(
        <Container>
            <GlobalStyle />
            <P>Main Page</P>
            <P>
                {/* <ItemButton to="/">Main</ItemButton> */}
                <ItemButton to="/button">Button</ItemButton>
                <ItemButton to="check-box">CheckBox</ItemButton>
            </P>
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
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
`;

const ItemButton = styled(Link)`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    text-decoration: none;
    font-size: 20px;
    color: #3E2723;
    margin: 50px;
`;

const P = styled.p`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    font-size: 50px;
`;