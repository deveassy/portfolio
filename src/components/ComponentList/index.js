import React from "react";
import styled from "styled-components";
import { Route, NavLink, Link, Switch } from "react-router-dom";
import {
  ButtonBoard,
  TabMenuBoard,
  TooltipBoard,
  ProfileImgBoard,
} from "../../boards";
// import Button from "../Button";

export default function ComponentList() {
  const NotFound = () => {
    return (
      <div style={{ fontWeight: 800, fontSize: 30 }}>Sorry, Not Found</div>
    );
  };
  return (
    <Container>
      {/* <ListContainer>
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
          <ButtonName>TabMenu</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/profile-img")}>
          <ButtonImg>
            <ProfileImg src="./img/woman.png" />
          </ButtonImg>
          <ButtonName>Profile-Img</ButtonName>
        </Button>
      </ListContainer> */}
      <ListContainer>
        <LinkButton to="/button">
          <ButtonImg>
            <ButtonIcon>Button</ButtonIcon>
          </ButtonImg>
          <ButtonName>Button</ButtonName>
        </LinkButton>
        <LinkButton to="/tooltip">
          <ButtonImg>
            <TooltipIcon>Tooltip</TooltipIcon>
          </ButtonImg>
          <ButtonName>Tooltip</ButtonName>
        </LinkButton>
        <LinkButton to="/tab-menu">
          <ButtonImg>
            <TabIcon
              style={{ borderColor: "#000 transparent transparent #000" }}
            >
              tab1
            </TabIcon>
            <TabIcon style={{ backgroundColor: "#ffbd69" }}>tab2</TabIcon>
          </ButtonImg>
          <ButtonName>TabMenu</ButtonName>
        </LinkButton>
        <LinkButton to="/profile-img">
          <ButtonImg>
            <ProfileImg src="./img/woman.png" />
          </ButtonImg>
          <ButtonName>Profile-Img</ButtonName>
        </LinkButton>
      </ListContainer>
      <ContentContainer>
        <Switch>
          <Route exact={true} path="/button" component={ButtonBoard} />
          <Route path="/tooltip" component={TooltipBoard} />
          <Route path="/tab-menu" component={TabMenuBoard} />
          <Route path="/profile-img" component={ProfileImgBoard} />
          <Route component={NotFound} />
        </Switch>
      </ContentContainer>
      <MainButtonContainer to="/">
        <Img src="/img/home.png" />
      </MainButtonContainer>
    </Container>
  );
}

const LinkButton = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  padding: 5px 17px;
  text-decoration: none;
  color: #000;
  &.active {
    background-color: #f7d794;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px 10px 40px;
  background-color: #ecb390;
`;

const ButtonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin: 0 0 10px;
  border: 1px solid #fff;
  border-radius: 50%;
`;
const ButtonIcon = styled.div`
  padding: 2px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 2px;
`;
const ButtonName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  margin: 30px 60px;
  height: 500px;
`;
const MainButtonContainer = styled(Link)`
  display: flex;
  position: absolute;
  padding: 10px;
  bottom: 40px;
  right: 50px;
  border-radius: 50%;
  background-color: #ecdfc8;
  &:hover {
    background-color: #cd8d7b;
    box-shadow: 3px 3px 5px #6e5773;
  }
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
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
    top: 66px;
    left: 256px;
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
