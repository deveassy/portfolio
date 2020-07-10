import React from "react";
import styled from "styled-components";

import Button from "../Button";
import ProfileImg from "../ProfileImg";

export default function Profile({ history }) {
  return (
    <Container>
      <ProfileContainer>
        <ImgContainer>
          <ProfileImg
            src="./img/profile.JPG"
            variant="circle"
            size={170}
            animation
            style={{ position: "absolute" }}
          />
          <NickName>EASSY</NickName>
        </ImgContainer>
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
        <Button onClick={() => history.goBack()}>
          <MainImg src="/img/home.png" />
        </Button>
      </MainButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 560px;
  margin: 70px;
  border: 2px solid gray;
  border-radius: 10px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fcf8e8;
`;

const ImgContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 100px;
  height: 100px;
  top: 70px;
  border-radius: 50%;
  &:hover {
    & > span {
      visibility: visible;
      background-color: orange;
      margin-bottom: 20px;
      width: 220px;
    }
  }
`;
const NickName = styled.span`
  z-index: 1;
  position: absolute;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -50px;
  width: 50px;
  height: 30px;
  padding: 5px;
  color: #fff;
  font: 800 22px "Gochi Hand", cursive;
  transition: width 0.3s ease, margin-bottom 0.3s ease-in-out;
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
  margin: 30px 0 -20px;
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
  bottom: 100px;
  right: 80px;
  border-radius: 50%;
  &:hover {
    background-color: #cd8d7b;
    box-shadow: 3px 3px 5px #6e5773;
  }
`;

const MainImg = styled.img`
  width: 40px;
  height: 40px;
`;
