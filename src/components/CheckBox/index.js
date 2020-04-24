import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ isClicked, isChanged, isClickC, onClick, onChange, checked="false", ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} 
      onClick={e => {
        if(isClicked !== undefined) isClicked(e.target.checked);
        if(isChanged !== undefined) isChanged(e.target.checked);
        if(isClickC !== undefined) isClickC(e.target.checked);
      }}/>
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  background: ${props => (props.checked ? '#fab1a0' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  };
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  };
`;

export default Checkbox;