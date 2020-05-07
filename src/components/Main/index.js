import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
    return(
        <Container>
            <AboutButton to="/profile">
            <P1>PL▶︎Y</P1>
            <P2>Naegle [ 내글ː]</P2>
            </AboutButton>
            <ItemButton>
                <ItemButton1>
                    <ItemLink to="/button">
                        <button style={{padding:20}}>Btn</button>
                        <div>Button</div>
                    </ItemLink> 
                </ItemButton1>
                <ItemButton2>
                    <ItemLink to="/check-box">
                        <input type="checkbox"></input>
                        <div>CheckBox</div>
                    </ItemLink>
                </ItemButton2>
                <ItemButton3>
                    <ItemLink to="/popover">Popover</ItemLink>
                </ItemButton3>
                
            </ItemButton>
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
const ItemButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 130px;

`;
const ItemButton1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ItemButton2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ItemButton3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ItemLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: #3E2723;
    margin: 50px;
`;

const P1 = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 80px;
    font-weight: 800;
    color: #ffa34d;
    text-shadow: 4px 4px 3px #fff;
`;

const P2 = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 80px;
    font-weight: 800;
    color: #ecb390;
    text-shadow: 2px 2px 3px #fff;
`;