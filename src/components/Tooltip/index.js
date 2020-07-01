import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DefaultColor = "#666";

export default function Tooltip(props) {
  const { color = DefaultColor, mode, label, children } = props;
  return (
    <Container>
      <TooltipBox>
        {children}
        <TooltipText color={color} mode={mode}>
          {label}
        </TooltipText>
      </TooltipBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TooltipBox = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  font: 800 30px "sans-seridf";
  &:hover {
    & > span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;
const TooltipText = styled.span`
  position: absolute;
  visibility: hidden;
  /* bottom: 130%; */
  top: -40px;
  left: 50%;
  padding: 5px 10px;
  margin-left: -18%;
  background-color: ${(props) => {
    // if (props.mode === 'bright') return '#666';
    if (props.mode === "dark") return "#f5f5f5";
    return props.color;
  }};
  font: 500 15px "sans-serif";
  color: ${(props) => {
    // if (props.mode === 'bright') return '#f5f5f5';
    if (props.mode === "dark") return "#333";
    return "#fff";
  }};
  text-align: center;
  border-radius: 6px;
  opacity: 0;
  transition: all 0.5s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: ${(props) => {
      // if (props.mode === 'bright') return '5px solid #666';
      if (props.mode === "dark") return "5px solid #f5f5f5";
      return "5px solid #666";
    }};
    border-color: ${(props) => {
      // if (props.mode === 'bright')
      //   return '#666 transparent transparent transparent';
      if (props.mode === "dark")
        return "#f5f5f5 transparent transparent transparent";
      return "#666 transparent transparent transparent";
    }};
  }
`;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  mode: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
