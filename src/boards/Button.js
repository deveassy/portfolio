import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

function ButtonBoard() {
  return (
    <div>
      {/* <Line /> */}
      <Content>
        <P>Button</P>
        <p> What I used</p>
        <div style={{ fontSize: 25 }}>Main Page</div>
        <ButtonContent>
          <Button page="main">
            <P1 style={{ marginBottom: -10 }}>PL▶︎Y</P1>
            <P1 style={{ color: "#ecb390" }}>Naegle [ 내글ː]</P1>
          </Button>
        </ButtonContent>
        <div style={{ fontSize: 25 }}>Profile Page</div>
        <ButtonContent>
          <Button page="prof" style={{ marginBottom: 10 }}>
            <Img src="/img/github.png" alt="github" /> GITHUB
          </Button>
          <Button page="prof">
            <Img src="/img/velog.jpg" alt="velog" /> VELOG
          </Button>
        </ButtonContent>
      </Content>
    </div>
  );
}

// const Line = styled.div`
//   position: absolute;
//   top: 100px;
//   width: 100px;
//   border-top: 5px solid orange;
// `;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.div`
  position: relative;
  width: 260px;
  margin-bottom: -15px;
  font-size: 40px;
  font-weight: 800;
  color: #495057;
  cursor: default;
`;

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

const ButtonContent = styled.div`
  padding: 25px;
  border: 1px solid #adb5bd;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

export default ButtonBoard;
