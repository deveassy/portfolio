import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import Main from '../components/Main';
import Profile from '../components/Profile';
import {ButtonBoard, CheckBoxBoard, PopoverBoard} from '../boards';

const RootRouter = ({children}) => {

    const NotFound = () => {
        return <div style={{fontWeight:800, fontSize:30}}>Sorry, Not Found</div>
    }
    return(
        <Container>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/profile" component={Profile} />
                {children}
                <Route path="/button" component={ButtonBoard} />
                <Route path="/check-box" component={CheckBoxBoard} />
                <Route path="/popover" component={PopoverBoard} />
                <Route component={NotFound} />
            </Switch>
        </Container>
    )
}

export default RootRouter;

//컴포넌트 소개 화면
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        /* background-color: tomato; */
    }
`;