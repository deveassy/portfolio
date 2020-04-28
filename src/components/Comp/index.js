import React from 'react';
import {Route} from 'react-router-dom';

export default function Comp({match}) {
    const Button = () => {
        <div>버튼이야</div>
    }
    return(
        <div>
            <h1>Introduce my component</h1>
            <Route exact path={match.path} render={() => <Button />} />
            <Route path={'${match.path}/a'} render={() => <Button />} />
        </div>
    )
}