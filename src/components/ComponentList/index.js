import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ButtonBoard, TabMenuBoard, TooltipBoard } from "../../boards";
import Button from "../Button";

export default function ComponentList({ history }) {
  return (
    <Container>
      <ListContainer>
        <Button item onClick={() => history.push("/button")}>
          {/* <Button item onClick={moveRoute}> */}
          <ButtonImg>
            <ButtonItem>Button</ButtonItem>
          </ButtonImg>
          <ButtonName>Button</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/tooltip")}>
          <ButtonImg>
            <TooltipItem>Tooltip</TooltipItem>
          </ButtonImg>
          <ButtonName>Tooltip</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/tab-menu")}>
          <ButtonImg>tab</ButtonImg>
          <ButtonName>TabMenu</ButtonName>
        </Button>
      </ListContainer>
      <ContentContainer>
        <Route exact path="/button" component={ButtonBoard} />
        <Route path="/tooltip" component={TooltipBoard} />
        <Route path="/tab-menu" component={TabMenuBoard} />
      </ContentContainer>
      <MainButtonContainer>
        <Button onClick={() => history.push("/")}>
          <Img src="/img/home.png" />
        </Button>
      </MainButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px 20px 40px;
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
const ButtonItem = styled.div`
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
const Img = styled.img`
  width: 40px;
  height: 40px;
`;
const TooltipItem = styled.span`
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
    top: 57px;
    left: 72px;
    margin-left: -5px;
    border: 5px solid #999;
    border-color: #999 transparent transparent transparent;
  }
`;
