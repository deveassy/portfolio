import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const StyledImage = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ variant }) => {
    if (variant === "circle") return "50%";
    if (variant === "rounded") return "7px";
    return 0;
  }};
  border: 0;
  /* 애니메이션 효과 추가부분 */
  transition: ${(props) => {
    if (props.animation) return "all 0.15s ease-in-out;";
  }};
  &:hover {
    transform: ${(props) => {
      if (props.animation) return "scale(1.3)";
    }};
    border: ${(props) => {
      if (props.animation) return "5px solid #ffa34d";
    }};
    margin-bottom: ${(props) => {
      if (props.animation) return "30px";
    }};
  }
`;

export default function ProfileImage(props) {
  const { src, size, variant, animation } = props;

  const convertSize = React.useMemo(() => {
    if (size === "small") return "50px";
    if (size === "normal") return "100px";
    if (size === "big") return "120px";
    return typeof size === "number" ? `${size}px` : "50px";
  }, [size]);

  return (
    <Container>
      <StyledImage
        src={src}
        size={convertSize}
        variant={variant}
        animation={animation}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;
`;

ProfileImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(["circle", "rounded"]),
  // animation: propTypes.element,
};
