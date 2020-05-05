import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import { ButtonBoard } from '../../boards';

export default function Header() {
    return(
        <Container>
            {/* {children} */}
            {/* <Link to="/button">Button</Link>
            <Link to="/check-box">Check-Box</Link>
            <Link to="/popover">Popover</Link> */}
            {/* <Route to={`${match.path}/button`} component={ButtonBoard} />
            <Route to={`${match.path}/check-box`} component={CheckBoxBoard} />
            <Route to={`${match.path}/popover`} component={PopoverBoard} /> */}
            <Link to="/">Main으로 가는 버튼</Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: gold;
`;