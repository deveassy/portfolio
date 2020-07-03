import React from "react";
import styled from "styled-components";
import ProfileImg from "../components/ProfileImg";

export default function ProfileImgBoard() {
  return (
    <Container>
      <PageName>Profile Image</PageName>
      <ProfileImgContainer>
        <ProfileImg
          src="./img/profile.JPG"
          variant="circle"
          size={170}
          animation
        />
        {/* <Nickname>EASSY</Nickname> */}
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
        {/* 추가로, 제 nickname이 나타나도록 만들었습니다. */}
        {/* <br /> */}
        직접 확인해보세요 :)
      </Description>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const PageName = styled.div`
  position: absolute;
  font: 700 35px "Pangolin", cursive;
`;
const ProfileImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 880px;
  height: 250px;
  margin: 80px 0 0 30px;
  padding: 30px 80px;
  border: 1px solid #888;
`;
// const Nickname = styled.span`
//   z-index: 1;
//   position: absolute;
//   visibility: hidden;
//   top: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 150px;
//   height: 30px;
//   padding: 10px;
//   background-color: #ffa34d;
//   color: #fff;
//   font-size: 30px;
//   transition: width 0.3s ease, margin-bottom 0.3s ease-in-out;
// `;

const Description = styled.div`
  position: absolute;
  top: 150px;
  left: 420px;
  font: 500 25px "Poor Story", cursive;
`;
