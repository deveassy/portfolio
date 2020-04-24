import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
// import Items from './components/Items';
import RootRouter from './routes';

export default function App() {
  return(
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <ContentContainer>
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
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 10px;
`;

const ContentContainer = styled(Container)`
  flex-direction: column;
  background-color: #fff;
`;