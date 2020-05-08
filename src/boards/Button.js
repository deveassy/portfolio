import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

function ButtonBoard() {
    
  return (
    <div>
    <Line />
    <Content>
        <P>Button</P>
        <ButtonContent> {/* color: 배경색(#748ffc)을 기준으로 함 */}
          <Button mode="full" onClick={ () => {
            console.log("This is a Basic button.");
          }}>contained</Button>
          <Button mode="line" color="#fff" onClick={ () => {
            console.log("This is a out-line button.");
          }}>outlined</Button>
          <Button color="#fff" onClick={ () => {
            console.log("This is a text button without line.");
          }}>text</Button>
          <Button mode="disabled" color="#868e96" disabled>disabled</Button>
          <Button action="shadow" onClick={() => {
            window.confirm('정말로?') 
            if(true) return console.log("전송!");
          }
          }>Ani-1</Button>
          <Button action="slide">Ani-2</Button>
          <Button action="border">Ani-3</Button>
        </ButtonContent>
    </Content>
    </div>
  );
}

const Line = styled.div`
  position: absolute;
  width: 70px;
  border-top: 3px solid orange;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.div`
  position: relative;
  width: 260px;
  padding: 5px;
  top: 1px;
  border-bottom: none;
  border: 1px solid #000;
  font-size: 40px;
  font-weight: 800;
  color: #495057;
  cursor: default;
`;

const ButtonContent = styled.div`
  border: 1px solid #000;
`;

export default ButtonBoard;