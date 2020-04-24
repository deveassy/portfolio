import React, { useState, useReducer } from 'react';
import {Link} from 'react-router-dom';
import CheckBox from '../components/CheckBox';
import styled from 'styled-components';

export default function CheckBoxBoard() {

    const [checked, setChecked] = useState(false);
    function handleChange (e) {
        // e.preventdefault();
        setChecked(e.target.checked);
    }

    const initialState = {
        clickA: false,
        clickB: false,
        clickC: false,
        all: false
    }

    const reducer = (state, action) => ({...state, ...action})
    const [state, setState] = useReducer(reducer, initialState);

    const clearFilter = () => setState(initialState);

    return(
        <Content>
            <P>Check-Box</P>
            <div>
                <Button onClick={() => clearFilter()}>RESET</Button>
                <input 
                type="checkbox" />
                <span style={{marginLeft:10}}>check/uncheck all</span>
            </div>
            <br />
            <label>        
                <CheckBox 
                checked={state.clickA}
                isClicked={v => setState({clickA : v})}
                onChange={handleChange} />
                <span style={{marginLeft:10,fontSize:25}}>
                    Item A is  {state.clickA ? "checked" : "unchecked"}
                </span>
            </label>
            <label>
                <CheckBox 
                checked={state.clickB}
                isChanged={v => setState({clickB : v})}
                onChange={handleChange} />
                <span style={{marginLeft:10,fontSize:25}}>
                Item B is  {state.clickB ? "checked" : "unchecked"}
                </span>
            </label>
            <label>
                <CheckBox 
                checked={state.clickC}
                isClickC={v => setState({clickC : v})}
                onChange={handleChange} />
                <span style={{marginLeft:10,fontSize:25}}>
                Item C is  {state.clickC ? "checked" : "unchecked"}
                </span>
            </label>
            <MainButton to="/">Back to the Main Page</MainButton>
        </Content>
    );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.div`
  width: 260px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
  cursor: default;
`;

const Button = styled.button`
    outline: none;
    background-color: #fdcb6e;
`;

const MainButton = styled(Link)`
  text-decoration: none;
  font-size: 20px;
`;