import React from "react";
import styled from "styled-components";

import Tooltip from "../components/Tooltip";
import Button from "../components/Button";

export default function TooltipBoard() {
  return (
    <Container>
      <PageName>Tooltip</PageName>
      <Tooltip label="Here is my Profile :)">
        <Button page="main">
          <MainButton style={{ marginBottom: -10 }}>PL▶︎Y</MainButton>
          <MainButton style={{ color: "#ecb390" }}>Naegle [ 내글ː]</MainButton>
        </Button>
      </Tooltip>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
`;
const PageName = styled.div`
  margin-bottom: 50px;
  font: 700 35px "Pangolin", cursive;
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
