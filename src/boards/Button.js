import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

function ButtonBoard() {
    
  return (
    <div>
    <Line />
    <Content>
      <P>Button</P>
      <p> What I used</p>
        <Page>Main Page</Page>
        <ButtonContent> {/* color: 배경색(#748ffc)을 기준으로 함 */}
          <Button><img src="/img/github.png" style={{width:20, height:20}}/> GITHUB</Button>
        </ButtonContent>
        <Page>Profile Page</Page>
        <ButtonContent>
          <Button><img src="/img/github.png" style={{width:20, height:20}}/> GITHUB</Button>
          <Button><img src="/img/velog.jpg" style={{width:20, height:20}}/> VELOG</Button>
        </ButtonContent>
    </Content>
    </div>
  );
}

const Line = styled.div`
  position: absolute;
  top: 100px;
  width: 100px;
  border-top: 5px solid orange;
`;
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

const ButtonContent = styled.div`
  border: 1px solid #adb5bd;
`;

const Page = styled.div`
  font-size: 25px;
`;

export default ButtonBoard;