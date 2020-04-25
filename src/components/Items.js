import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Items() {
    return(
        <Container>
            <ItemButton to="/">Main</ItemButton>
            <ItemButton to="/button">Button</ItemButton>
            <ItemButton to="check-box">CheckBox</ItemButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    height: 200px;
`;

const ItemButton = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: #3E2723;
    margin: 50px;
`;