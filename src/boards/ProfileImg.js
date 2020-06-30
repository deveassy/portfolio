import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";

export default function ProfileImgBoard() {
  return (
    <Container>
      <PageName>Profile Image</PageName>
      <ProfileImg
        src="./img/profile.JPG"
        variant="circle"
        size={140}
        // animation
      />
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
`;
const PageName = styled.div`
  margin-bottom: 30px;
  font: 700 35px "Pangolin", cursive;
`;
