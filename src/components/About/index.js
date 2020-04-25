import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function About() {
    return(
        <AboutMe to="/about">▶︎</AboutMe>
    )
}

const AboutMe = styled(Link)`
    text-decoration: none;
    font-size: 60px;
    font-weight: 800;
`;