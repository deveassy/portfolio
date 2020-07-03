import React from "react";
import styled from "styled-components";

import Tooltip from "../components/Tooltip";
import Button from "../components/Button";

export default function TooltipBoard() {
  return (
    <Container>
      <PageName>Tooltip</PageName>
      <TooltipContainer>
        <Tooltip label="Here is my Profile :)">
          <Button page="main">
            <MainButton style={{ marginBottom: -10 }}>PL▶︎Y</MainButton>
            <MainButton style={{ color: "#ecb390" }}>
              Naegle [ 내글ː]
            </MainButton>
          </Button>
        </Tooltip>
        <Description>
          Main page에 사용된 Tooltip입니다.
          <br />
          버튼위로 cursor를 올리면 Tooltip이 나타납니다.
          <br />
          Profile page로 이동하는 버튼인데,
          <br />
          한눈에 알아보기 어려울 수 있어서 알려주기 위함이에요.
        </Description>
      </TooltipContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const PageName = styled.div`
  font: 700 35px "Pangolin", cursive;
`;
const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 900px;
  height: 300px;
  padding: 30px 50px;
  margin: 80px -70px;
  border: 1px solid #888;
`;
const MainButton = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-family: "Roboto", sans-serif;
  font-size: 50px;
  font-weight: 800;
  color: #ffa34d;
  text-shadow: 2px 2px 3px #fff;
`;
const Description = styled.div`
  position: absolute;
  top: 120px;
  left: 450px;
  font: 500 25px "Poor Story", cursive;
`;
