import React from 'react';
import {Route} from 'react-router-dom';
import About from './components/About';


export default function PlayButton() {
    return(
        <Route path="/about" component={About} />
    )
}