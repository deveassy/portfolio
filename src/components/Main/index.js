import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

export default function Main({ history }) {
  return (
    <Container>
      <ProfileButton to="/profile">
        <ProfileLink>PL▶︎Y</ProfileLink>
        <ProfileLink
          style={{ color: "#ecb390", textShadow: "2px 2px 2px #fff" }}
        >
          Naegle [ 내글ː]
        </ProfileLink>
      </ProfileButton>
      <ButtonContainer>
        <Button item onClick={() => history.push("/button")}>
          <Img>
            <button>Button</button>
          </Img>
          <Div>Button</Div>
        </Button>
        <Button item onClick={() => history.push("/check-box")}>
          <Img>
            <input type="checkbox" />
          </Img>
          <Div>Check-Box</Div>
        </Button>
        <Button item onClick={() => history.push("/tooltip")}>
          <Img>이미지</Img>
          <Div>Tooltip</Div>
        </Button>
        {/* </ItemButton> */}
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

const ProfileButton = styled(Link)`
  text-decoration: none;
  font-size: 80px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px solid #f3a683;
  border-radius: 50%;
`;

const Div = styled.div`
  font-size: 22px;
  margin-top: 20px;
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
