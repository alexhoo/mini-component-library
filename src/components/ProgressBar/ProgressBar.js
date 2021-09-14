/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--height": "24px",
    "--borderRadius": "0.5rem",
    "--padding": "4px 4px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": 4 / 16 + "rem",
    "--padding": 0,
  },
  small: {
    "--height": "8px",
    "--borderRadius": 4 / 16 + "rem",
    "--padding": "0px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper style={styles}>
      <Progress value={value} />
    </Wrapper>
  );
};

const Base = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.gray50};
  width: 100%;
`;
const Wrapper = styled(Base)`
  border-radius: var(--borderRadius);
  height: var(--height);
  padding: var(--padding);
`;
const Progress = styled.div`
  opacity: 0.8;
  display: block;
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  ${(props) =>
    props.value === 100 &&
    "border-top-right-radius: 4px; border-bottom-right-radius: 4px;"};
`;

export default ProgressBar;
