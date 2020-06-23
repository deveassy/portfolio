import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    children,
    page,
    action,
    item,
    // disabled = false,
  } = props;
  return (
    <Container page={page} action={action} item={item} {...props}>
      {children}
      {/* {disabled && <DisabledContainer />} */}
    </Container>
  );
}

const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: ${(props) => {
    if (props.page === "prof") return "row";
    return "column";
  }};
  align-items: center;
  justify-content: center;
  width: ${(props) => {
    if (props.page === "prof") return "110px";
    if (props.item) return "140px";
  }};
  height: ${(props) => {
    if (props.item) return "140px";
  }};
  padding: 2px;
  font-size: ${(props) => {
    if (props.page === "prof") return "22px";
  }};
  border: none;
  background-color: transparent;
  cursor: ${(props) => {
    if (props.page === "main") return "normal";
    return "pointer";
  }};
  &:hover {
    color: ${(props) => {
      if (props.page === "prof") return "#ff5200";
    }};
    background-color: ${(props) => {
      if (props.item) return "#f7d794";
    }};
  }
`;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  page: PropTypes.string,
  action: PropTypes.string,
  onClick: PropTypes.func,
};
