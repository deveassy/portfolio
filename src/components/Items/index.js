import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import { ButtonBoard } from '../../boards';

export default function Items() {
    return(
        <Container>
            <LinkButton to="/"><Img src="/img/home.png" /></LinkButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: absolute;
    padding: 10px;
    top: 570px;
    left: 1300px;
    border: 0;
    border-radius: 50%;
    background-color: #e7f5ff;
`;

const LinkButton = styled(Link)`
    text-decoration: none;
    color: #000;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;