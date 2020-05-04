import React from 'react';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import {ButtonBoard, CheckBoxBoard, PopoverBoard} from '../../boards';

export default function ComponentList({children, match}) {
    
    return(
        <Container>
            <ListContainer>
                <Link to={`${match.url}/button-content`}>Button</Link>
                <Link to={`${match.url}/check-box-content`}>Check-Box</Link>
                <Link to={`${match.url}/button-content`}>Popover</Link>
                {/* <Link to="/button-content">Button</Link>
                <Link to="/checkbox-content">Check-Box</Link>
                <Link to="/popover-content">Popover</Link> */}
            </ListContainer>
            <ContentContainer>
                <Route exact path={`${match.url}/button-content`} component={ButtonBoard} />
                <Route path={`${match.url}/check-box-content`} component={CheckBoxBoard} />
                <Route path={`${match.url}/popover-content`} component={PopoverBoard} />
            </ContentContainer>
            <HomeButton>
                {children}
            </HomeButton>
        </Container>
        // <Container>
        //     <ItemListContainer>
        //         <Link to={`${match.path}/button`}>Button</Link>
        //         <Link to={`${match.path}/check-box`}>Check-Box</Link>
        //         <Link to={`${match.path}/popover`}>Popover</Link>
        //     </ItemListContainer>
        //     <ContentContainer>
        //         <Route path={`${match.path}/button`} component={ButtonBoard} />
        //         <Route path={`${match.path}/check-box`} component={CheckBoxBoard} />
        //         <Route path={`${match.path}/popover`} component={PopoverBoard} />
        //     </ContentContainer>
        // </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListContainer = styled.div`
    flex: 1;
    text-decoration: none;
    background-color: skyblue;
`;

const ContentContainer = styled.div`
    flex: 5;
`;

const HomeButton = styled.div`
    background-color: brown;
`;