import React from "react";
import styled from "styled-components";

export default function TabMenuBoard() {
  return (
    <Container>
      <PageName>Tab Menu</PageName>
      <TabMenuContainer></TabMenuContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const PageName = styled.div`
  position: absolute;
  top: 0;
  font: 700 35px "Pangolin", cursive;
`;
const TabMenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 880px;
  height: 300px;
  padding: 30px 50px;
  margin: 80px 30px;
  border: 1px solid #888;
`;
