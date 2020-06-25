import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

export default function Main({ history }) {
  return (
    <Container>
      {/* <ProfileButton to="/profile"> */}
      <Button onClick={() => history.push("/profile")}>
        <ProfileLink>PL▶︎Y</ProfileLink>
        <ProfileLink
          style={{ color: "#ecb390", textShadow: "2px 2px 2px #fff" }}
        >
          Naegle [ 내글ː]
        </ProfileLink>
      </Button>
      <ButtonContainer>
        <Button item onClick={() => history.push("/button")}>
          <ButtonImg>
            <button>Button</button>
          </ButtonImg>
          <ButtonName>Button</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/check-box")}>
          <ButtonImg>
            <input type="checkbox" false />
          </ButtonImg>
          <ButtonName>Check-Box</ButtonName>
        </Button>
        <Button item onClick={() => history.push("/tooltip")}>
          <ButtonImg>
            <TooltipTest>Tooltip</TooltipTest>
          </ButtonImg>
          <ButtonName>Tooltip</ButtonName>
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

// const ProfileButton = styled(Link)`
//   text-decoration: none;
//   font-size: 80px;
// `;
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
const ButtonName = styled.div`
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
    top: 62px;
    left: 50%;
    margin-left: -5px;
    border: 5px solid #999;
    border-color: #999 transparent transparent transparent;
  }
`;
