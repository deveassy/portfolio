import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Tooltip from "../Tooltip";

export default function Main({ history }) {
  return (
    <Container>
      <Button onClick={() => history.push("/profile")}>
        <Tooltip label="Here is My Profile, Come On :)">
          <ProfileLink>PL▶︎Y</ProfileLink>
          <ProfileLink
            style={{ color: "#ecb390", textShadow: "2px 2px 2px #fff" }}
          >
            Naegle [ 내글ː]
          </ProfileLink>
        </Tooltip>
      </Button>
      <ButtonContainer>
        <Button item onClick={() => history.push("/button")}>
          <ButtonImg>
            <ButtonIcon>Button</ButtonIcon>
          </ButtonImg>
          <ButtonName>Button</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/tooltip")}>
          <ButtonImg>
            <TooltipIcon>Tooltip</TooltipIcon>
          </ButtonImg>
          <ButtonName>Tooltip</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/tab-menu")}>
          <ButtonImg>
            <TabIcon
              style={{ borderColor: "#000 transparent transparent #000" }}
            >
              tab1
            </TabIcon>
            <TabIcon style={{ backgroundColor: "#ffbd69" }}>tab2</TabIcon>
          </ButtonImg>
          <ButtonName>Tab-Menu</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/profile-img")}>
          <ButtonImg>
            <ProfileImg src="./img/woman.png" />
          </ButtonImg>
          <ButtonName>Profile-Img</ButtonName>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;
const ProfileLink = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 80px;
  font-weight: 800;
  color: #ffa34d;
  text-shadow: 4px 4px 3px #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 110px;
`;
const ButtonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid #f3a683;
  border-radius: 50%;
`;
const ButtonIcon = styled.div`
  padding: 2px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 2px;
`;
const ButtonName = styled.div`
  font-size: 22px;
  margin-top: 20px;
`;

const TooltipIcon = styled.span`
  width: 50px;
  padding: 5px 0;
  background-color: #999;
  font: 500 15px "sans-serif";
  color: #fff;
  text-align: center;
  border-radius: 3px;

  &::after {
    content: "";
    position: absolute;
    top: 62px;
    left: 50%;
    margin-left: -5px;
    border: 5px solid #999;
    border-color: #999 transparent transparent transparent;
  }
`;
const TabIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 15px;
  border: 1px solid #000;
  font-size: 10px;
`;
const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #fff;
`;
