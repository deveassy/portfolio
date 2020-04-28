import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
// import Items from './components/Items';
import RootRouter from './routes';
import './App.css';

export default function App() {
  return(
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <ContentContainer>
          <RootRouter />
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
`;

const ContentContainer = styled(Container)`
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;