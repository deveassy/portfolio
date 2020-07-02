import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Button from "../components/Button";

function ButtonBoard() {
  return (
    <Container>
      <PageName
        style={{
          top: 0,
          left: 10,
          fontSize: 35,
          padding: 0,
          backgroundColor: "transparent",
        }}
      >
        Button
      </PageName>
      <Pages>
        <PageName>Main Page</PageName>
        <ButtonContainer>
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
        </ButtonContainer>
        <Description>
          Main page에서 사용되는 버튼들입니다.
          <br />
          첫번째 버튼을 클릭 시 profile page로 이동합니다.
          <br />
          나머지 버튼들은 클릭 시 각 component page로 이동하게 됩니다.
        </Description>
      </Pages>
      <Pages>
        <PageName style={{ left: 690 }}>Profile Page</PageName>
        <ButtonContainer style={{ marginTop: 50 }}>
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
        </ButtonContainer>
        <Description style={{ paddingTop: 70 }}>
          Profile page에서 사용되는 버튼들입니다.
          <br />
          차례대로 깃허브, 벨로그로 링크가 걸려있기 때문에 클릭 시 링크로
          이동합니다.
          <br />집 모양의 버튼은 클릭 시 Main page로 이동하게 됩니다.
        </Description>
      </Pages>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const Pages = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #888;
  padding: 20px;
  margin: 70px 10px;
  width: 600px;
  height: 300px;
  min-width: 448px;
`;
const Description = styled.span`
  padding: 30px 10px;
  font: 500 20px "Poor Story", cursive;
`;
const PageName = styled.div`
  position: absolute;
  top: 50px;
  left: 30px;
  padding: 5px;
  background-color: #ffbd69;
  border-radius: 5px;
  font: 700 30px "Pangolin", cursive;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px 0;
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
  width: 55px;
  height: 55px;
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
  font-size: 16px;
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
