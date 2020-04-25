import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import Main from '../components/Main';
import {ButtonBoard, CheckBoxBoard} from '../boards';

const RootRouter = () => {
    return(
        <Container>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/button" component={ButtonBoard} />
                <Route path="/check-box" component={CheckBoxBoard} />
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