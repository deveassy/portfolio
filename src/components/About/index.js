import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function About() {
    return(
        <Container>
            <ProfileContainer>
                <ProfileImg src="/img/profile.JPG" />
                <P>
                    <h2>LEE EUN JI</h2>
                    Frontend Developer
                </P>
                <P><GitLink url="https://github.com/deveassy/react-project-component">Github</GitLink></P>
            </ProfileContainer>
            <MainButtonContainer>
                <MainButton to="/"><Img src="/img/home.png" /></MainButton>
            </MainButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    height: 530px;
    margin: 70px;
    border: 2px solid gray;
    border-radius: 10px;
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
`;

const ProfileImg = styled.img`
    width: 140px;
    height: 140px;
    margin-top: 60px;
    border: 0;
    border-radius: 50%;
`;

const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
`;

const GitLink = styled.a`
    text-decoration: none;
`;

const MainButtonContainer = styled.div`
    display: flex;
    position: absolute;
    padding: 10px;
    top: 570px;
    left: 1300px;
    border: 0;
    border-radius: 50%;
    background-color: #e7f5ff;
`;

const MainButton = styled(Link)`
    text-decoration: none;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;