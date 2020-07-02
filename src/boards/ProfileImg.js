import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";

export default function ProfileImgBoard() {
  return (
    <Container>
      <PageName>Profile Image</PageName>
      <ProfileImgContainer>
        <ProfileImg src="./img/profile.JPG" variant="circle" size={140} />
      </ProfileImgContainer>
      <Description>
        제 <strong>profile page</strong>에서 사용된 profile image입니다.
        <br />
        이미지 위로 cursor를 올리면,
        <br />
        이미지가 확대되면서 border가 생기는
        <br />
        애니메이션이 적용됩니다.
        <br />
        직접 확인해보세요 :)
      </Description>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 900px;
`;
const PageName = styled.div`
  position: absolute;
  font: 700 35px "Pangolin", cursive;
`;
const ProfileImgContainer = styled.div`
  width: 650px;
  height: 185px;
  margin: 80px 0;
  padding: 30px 50px;
  border: 1px solid #888;
`;
const Description = styled.div`
  position: absolute;
  top: 140px;
  left: 290px;
  font: 500 20px "Poor Story", cursive;
`;
