import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Profile() {
    return(
        <Container>
            <ProfileContainer>
                <ProfileImg src="/img/profile.JPG" />
                <P>
                    <P1>LEE EUN JI</P1>
                    <P2>Frontend Developer</P2>
                    <P3>
                        <div style={{marginBottom:10}}>Contact Me ❗️</div>
                        <div style={{marginBottom:10}}><Img src="/img/down.png" /></div>
                        <div>E-mail : xjfmwld@gamil.com</div>
                    </P3>
                    <Github href="https://github.com/deveassy/react-project-component"><Img src="/img/github.png"/> GITHUB</Github>
                    <Velog href="https://velog.io/@eassy/series/Component-project"><Img src="/img/velog.jpg"/> VELOG</Velog>
                </P>
            </ProfileContainer>
            <MainButtonContainer>
                <MainButton to="/"><ImgMain src="/img/home.png" /></MainButton>
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
    background-color: #fcf8e8;
`;

const ProfileImg = styled.img`
    width: 140px;
    height: 140px;
    margin-top: 60px;
    border: 0;
    border-radius: 50%;
`;

const P = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const P1 = styled.p`
    margin: 20px 0 8px;
    font-size: 30px;
    font-weight: 600;
    color: #000;
`;
const P2 = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    color: #000;
`;
const P3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    color: #000;
`;

const Github = styled.a`
    margin-top: 25px;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    color: #000;
    &:hover {
        color: #ff5200;
    }
`;
const Img = styled.img`
    width: 20px;
    height: 20px;
`;

const Velog = styled.a`
    margin: 10px;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    color: #000;
    &:hover {
        color: #ff5200;
    }
`;

const MainButtonContainer = styled.div`
    display: flex;
    position: absolute;
    padding: 10px;
    top: 570px;
    left: 1300px;
    border-radius: 50%;
    background-color: transparent;
    &:hover {
      /* background-color: #a8d3da; */
      background-color: #cd8d7b;
      box-shadow: 3px 3px 5px #6e5773;
    }
`;

const MainButton = styled(Link)`
    text-decoration: none;
`;

const ImgMain = styled.img`
    width: 40px;
    height: 40px;
`;