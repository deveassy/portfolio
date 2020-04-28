import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import ButtonBoard from '../boards/ButtonBoard';

export default function Detail({match}) {
    return(
        <div>
            <ul>
                <li><NavLink to={'${match.url}/Button'}>Button</NavLink></li>
                <li><NavLink to={'${match.url}/CheckBox'}>Check-box</NavLink></li>
                <li><NavLink to={'${match.url}/Popover'}>Popover</NavLink></li>
            </ul>
            <Route exact path={match.url} render={() => (<h2>라우터중첩</h2>)} />
            <Route path={'${match.url}/Button'} component={ButtonBoard} />
            
        </div>
    );
}
