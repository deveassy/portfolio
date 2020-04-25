import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
// import Items from './components/Items';
import RootRouter from './routes/Root';
import PlayButton from './routes/Play';
import './App.css';

export default function App() {
  return(
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <ContentContainer>
          <PlayButton />
          <RootRouter />
          {/* <Items /> */}
        </ContentContainer>
      </BrowserRouter>
    </Container>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 10px;
  background-color: gray;
`;

const ContentContainer = styled(Container)`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;