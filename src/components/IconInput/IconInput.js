import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  large: {
    fontSize: `${18 / 16}rem`,
    iconSize: 24,
    paddingLeft: `${12 / 16}rem`,
    borderThickness: 2,
    height: 36,
  },
  small: {
    fontSize: `${14 / 16}rem`,
    iconSize: 16,
    paddingLeft: `${12 / 16}rem`,
    borderThickness: 1,
    height: 24,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = sizes[size];

  return (
    <Wrapper>
      <IconWrapper
        style={{
          "--height": styles.iconSize + "px",
        }}
      >
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>

      <NativeInput
        placeholder={placeholder}
        style={{
          "--borderThickness": styles.borderThickness + "px",
          "--color": COLORS.gray500,
          "--width": `${width}px`,
          "--height": `${styles.height}px`,
          "--fontSize": `${styles.fontSize}`,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  height: var(--height);
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  color: var(--color);
  height: var(--height);
  margin: auto;
`;

const NativeInput = styled.input`
  border-color: black;
  border-width: 0 0 var(--borderThickness) 0px;
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  height: var(--height);
  outline-offset: 2px;
  padding-left: var(--height);
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ${Wrapper}:focus & {
    outline: 5px solid ${COLORS.blue500};
  }
`;

export default IconInput;
