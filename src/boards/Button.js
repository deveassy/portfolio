import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function ButtonBoard() {
  // const [click, onClickAlert] = useState(false);
    
  return (
    <Content>
      <div> {/* color: 배경색(#748ffc)을 기준으로 함 */}
        <P>Button - Normal</P>
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
      </div>
      <div>
        <P>Button - Animation</P>
        <Button action="shadow" onClick={() => {
          window.confirm('정말로?') 
          if(true) return console.log("전송!");
        }
        }>Ani-1</Button>
        <Button action="slide">Ani-2</Button>
        <Button action="border">Ani-3</Button>
      </div>
      <div>
        <P>Button - Icon</P>
        <Button mode="icon" ><Img src="/img/check.png" /></Button>
        <Button mode="icon"><Img src="/img/download.png" /></Button>
        <Button mode="icon" onClick={ () => {
          alert("정말로 닫으시겠습니까?");
        }}><Img src="/img/close.png" /></Button>
        <Button mode="icon" onClick={ () => {
          alert("정말로 버릴까요?");
        }}><Img src="/img/trash.png" /></Button>
      </div>
      <MainButton to="/">Back to the Main Page</MainButton>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.div`
  width: 260px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
  cursor: default;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const MainButton = styled(Link)`
  text-decoration: none;
  font-size: 20px;
`;

export default ButtonBoard;