import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
    return(
        <Container>
            <AboutButton to="/profile">
            <P>PL▶︎Y</P>
            <P>Naegle [ 내글ː]</P>
            </AboutButton>
            <div style={{marginTop:100}}>
                <ItemButton to="/button">Button</ItemButton>
                <ItemButton to="/check-box">CheckBox</ItemButton>
                <ItemButton to="/popover">Popover</ItemButton>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`;

const AboutButton = styled(Link)`
    text-decoration: none;
    font-size: 80px;
`;

const ItemButton = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: #3E2723;
    margin: 50px;
`;

const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 70px;
    font-weight: 800;
    margin: 10px;
`;