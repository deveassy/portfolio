import React from 'react';
import {Route, Link} from 'react-router-dom';
import Detail from '../components/Detail';
// import styled from 'styled-components';

export default function ButtonBoard({match}) {
  return(
    <>
    <div>
      <Route path={match.path} component={Detail}/>
    </div>
      <h1>About Button</h1>
      <Link to="/">Main</Link>
    </>
  )
}