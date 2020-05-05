import React from 'react';
import styled from 'styled-components';
// import {Link, Route} from 'react-router-dom';
// import {ButtonBoard, CheckBoxBoard, PopoverBoard} from '../../boards';
import Header from 'Header';

export default function ComponentList({children, match}) {
    
    return(
        <Container>
            {/* <ListContainer>
                <Link to={`${match.path}/button-content`}>Button</Link>
                <Link to={`${match.path}/check-box-content`}>Check-Box</Link>
                <Link to={`${match.path}/button-content`}>Popover</Link>
                <Link to="/button-content">Button</Link>
                <Link to="/checkbox-content">Check-Box</Link>
                <Link to="/popover-content">Popover</Link>
            </ListContainer> */}
            {/* {children} */}
            {/* <ContentContainer>
                <Route exact path={`${match.path}/button-content`} component={ButtonBoard} />
                <Route path={`${match.path}/check-box-content`} component={CheckBoxBoard} />
                <Route path={`${match.path}/popover-content`} component={PopoverBoard} />
            </ContentContainer> */}
            {/* <HomeButton>
                {children}
            </HomeButton> */}
            <Header />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// const ListContainer = styled.div`
//     flex: 1;
//     text-decoration: none;
//     background-color: skyblue;
// `;

const ContentContainer = styled.div`
    flex: 5;
`;

// const HomeButton = styled.div`
//     display: flex;
//     align-items: flex-end;
// `;