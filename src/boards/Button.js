import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Button from "../components/Button";

function ButtonBoard() {
  return (
    <div>
      <ButtonContent>
        <PageName>Main Page</PageName>
        <Pages>
          <Button page="main">
            <MainButton style={{ marginBottom: -10 }}>PL▶︎Y</MainButton>
            <MainButton style={{ color: "#ecb390" }}>
              Naegle [ 내글ː]
            </MainButton>
          </Button>
          <Button item>
            <ButtonImg>
              <ButtonItem>Button</ButtonItem>
            </ButtonImg>
            <ButtonName>Button</ButtonName>
          </Button>
          <Button item>
            <ButtonImg>
              <TooltipTest>Tooltip</TooltipTest>
            </ButtonImg>
            <ButtonName>Tooltip</ButtonName>
          </Button>
          <Button item>
            <ButtonImg>tab</ButtonImg>
            <ButtonName>TabMenu</ButtonName>
          </Button>
        </Pages>
        <PageName style={{ left: 670 }}>Profile Page</PageName>
        <Pages>
          <Button page="prof">
            <LinkImg src="/img/github.png" alt="github" /> GITHUB
          </Button>
          <Button page="prof" style={{ margin: "0 30px" }}>
            <LinkImg src="/img/velog.jpg" alt="velog" /> VELOG
          </Button>
          <Button>
            <MainImgContainer>
              <MainImg src="/img/home.png" />
            </MainImgContainer>
          </Button>
          {/* <MainImgContainer>
            <MainImg src="/img/home.png" />
          </MainImgContainer> */}
        </Pages>
      </ButtonContent>
    </div>
  );
}

const ButtonContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const PageName = styled.div`
  position: absolute;
  left: 10px;
  font: 700 35px "Pangolin", cursive;
`;
const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 50px 20px;
  margin: 70px 10px;
  width: 700px;
  min-width: 448px;
  border: 1px solid #000;
`;

const MainButton = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 800;
  color: #ffa34d;
  text-shadow: 2px 2px 3px #fff;
`;

const LinkImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const MainImgContainer = styled.div`
  padding: 10px;
  border-radius: 50%;
  &:hover {
    background-color: #cd8d7b;
    box-shadow: 3px 3px 5px #6e5773;
  }
`;
// const MainImgContainer = styled(Link)`
//   padding: 10px;
//   border-radius: 50%;
//   &:hover {
//     background-color: #cd8d7b;
//     box-shadow: 3px 3px 5px #6e5773;
//   }
// `;

const MainImg = styled.img`
  width: 40px;
  height: 40px;
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
const TooltipTest = styled.span`
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

export default ButtonBoard;
