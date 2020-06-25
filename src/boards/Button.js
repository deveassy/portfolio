import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

function ButtonBoard() {
  return (
    <div>
      {/* <Line /> */}
      <ButtonContent>
        <PageName>Main Page</PageName>
        <Pages>
          <Button page="main">
            <P1 style={{ marginBottom: -10 }}>PL▶︎Y</P1>
            <P1 style={{ color: "#ecb390" }}>Naegle [ 내글ː]</P1>
          </Button>
          <Button item>
            <ButtonImg>
              <button>Button</button>
            </ButtonImg>
            <ButtonName>Button</ButtonName>
          </Button>
          <Button item>
            <ButtonImg>
              <input type="checkbox" false />
            </ButtonImg>
            <ButtonName>Check-Box</ButtonName>
          </Button>
          <Button item>
            <ButtonImg>
              <TooltipTest>Tooltip</TooltipTest>
            </ButtonImg>
            <ButtonName>Tooltip</ButtonName>
          </Button>
        </Pages>
        <PageName>Profile Page</PageName>
        <Pages>
          <Button page="prof">
            <LinkImg src="/img/github.png" alt="github" /> GITHUB
          </Button>
          <Button page="prof">
            <LinkImg src="/img/velog.jpg" alt="velog" /> VELOG
          </Button>
        </Pages>
      </ButtonContent>
    </div>
  );
}

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageName = styled.div`
  font: 700 30px "sans-serif";
`;
const Pages = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 20px 0;
  width: 700px;
  border: 1px solid #000;
`;
// const P = styled.div`
//   position: relative;
//   width: 260px;
//   margin-bottom: -15px;
//   font-size: 40px;
//   font-weight: 800;
//   color: #495057;
//   cursor: default;
// `;

const P1 = styled.p`
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
