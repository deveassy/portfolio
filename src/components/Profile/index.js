import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImg src="/img/profile.JPG" />
        <ProfileContent>
          <AboutMe>LEE EUN JI</AboutMe>
          <AboutMe style={{ fontSize: 18, fontWeight: 300 }}>
            Frontend Developer
          </AboutMe>
          <ContactContent>
            <div style={{ marginTop: 15, marginBottom: 10, fontWeight: 900 }}>
              {" "}
              Contact Me
            </div>
            <div style={{ marginBottom: 10 }}>
              <LinkImg src="/img/down.png" />
            </div>
            <div>E-mail : dev.eass7@gamil.com</div>
            <ContactLink
              href="https://github.com/deveassy/react-project-component"
              style={{ marginTop: 25 }}
            >
              <LinkImg src="/img/github.png" /> GITHUB
            </ContactLink>
            <ContactLink href="https://velog.io/@eassy/series/Component-project">
              <LinkImg src="/img/velog.jpg" /> VELOG
            </ContactLink>
          </ContactContent>
        </ProfileContent>
      </ProfileContainer>
      <MainButtonContainer>
        <MainButton to="/">
          <MainImg src="/img/home.png" />
        </MainButton>
      </MainButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  position: relative;
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
  position: absolute;
  width: 140px;
  height: 140px;
  margin-top: 45px;
  border: 0;
  border-radius: 50%;
  transition: all 0.07s linear;
  &:hover {
    transform: scale(1.3);
    transition: all 0.07s linear;
    border: 5px solid #ffa34d;
  }
`;

const ProfileContent = styled.div`
  position: absolute;
  top: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const AboutMe = styled.p`
  margin: 10px 0 -10px;
  font: 600 45px "Gochi Hand", cursive;
  color: #000;
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

const ContactLink = styled.a`
  margin: 10px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  color: #000;
  &:hover {
    color: #ff5200;
  }
`;
const LinkImg = styled.img`
  width: 20px;
  height: 20px;
`;

const MainButtonContainer = styled.div`
  display: flex;
  position: absolute;
  padding: 10px;
  top: 570px;
  left: 1300px;
  border-radius: 50%;
  &:hover {
    background-color: #cd8d7b;
    box-shadow: 3px 3px 5px #6e5773;
  }
`;
const MainButton = styled(Link)`
  text-decoration: none;
`;
const MainImg = styled.img`
  width: 40px;
  height: 40px;
`;
