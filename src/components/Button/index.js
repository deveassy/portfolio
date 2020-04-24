import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const {
    mode,
    color = '#748ffc',
    action,
    disabled,
    onClick,
    children,
  } = props;
  return (
    <Container
      mode={mode}
      color={color}
      action={action}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  width: ${(props) => {
    if (props.mode === 'icon') return '75px';
    return '150px';
  }};
  height: ${(props) => {
    if (props.mode === 'icon') return '70px';
  }};
  padding: 10px;
  margin: 0 5px 10px 5px;
  border: ${(props) => {
    if (props.mode === 'line') return '2px solid #748ffc';
  }};
  border-style: ${(props) => (props.mode === 'line' ? 'solid' : 'hidden')};
  border-radius: ${(props) => {
    if (props.mode === 'icon') return '50%';
    return '5px';
  }};
  font: 700 20px sans-serif;
  letter-spacing: 1px;
  color: ${(props) => {
    if (props.mode === 'full' || props.action === 'shadow' || props.action === 'border') return '#fff';
    if (props.mode === 'disabled') return '#ced4da';
    if (props.action === 'slide') return '#000';
    return '#748ffc';
  }};
  background-color: ${(props) => {
    if (props.mode === 'icon') return '#fff';
    return props.color; //mode='icon'일 경우에만 흰색으로 지정. 나머지는 color props 받아오기
  }};
  cursor: ${(props) => {
    if (props.mode === 'disabled') return 'not-allowed';
    return 'pointer';
  }};
  transition: ${(props) => {
    if (props.action === 'slide') return 'all 0.9s';
    if (props.action === 'shadow') return 'all 0.5s';
    if (props.action === 'border') return 'background 250ms ease-in-out, transform 150ms ease';
    return 'all 0.3s';
  }};
  &:focus {
    outline: ${(props) => {
       if (props.action === 'border') return '1px solid #fff';
       return 'none';
    }};
    outline-offset: ${(props) => {
      if (props.action === 'border') return '-4px';
    }}
  };
  &:hover {
    background-color: ${(props) => {
      if (props.mode === 'full') return '#91a7ff';
      if (props.mode === 'disabled') return 'none';
      if (props.action === 'slide') return '#3b5bdb';
      if (props.action === 'shadow') return '#364fc7';
      if (props.action === 'border') return '#4263eb';
      return '#dbe4ff';
    }};
    color: ${(props) => {
      if (props.action === 'slide') return '#fff';
    }};
    box-shadow: ${(props) => {
      if (props.action === 'slide') return '150px 0 0 0 rgba(0,0,0,0.5) inset';
      if (props.action === 'shadow')
      return '0 8px 16px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);';
    }};
  };
  &:active {
    transform: ${(props) => {
      if (props.action === 'border') return 'scale(0.99)';
  }};
  }
`;