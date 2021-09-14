import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden/index";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectBase value={value} onChange={onChange}>
        {children}
      </SelectBase>
      <Presentational>
        {displayedValue}

        <IconWrapper style={{ "--size": `${24}px` }}>
          <Icon
            id="chevron-down"
            color={COLORS.GRAY_DARK}
            size={24}
            strokeWidth={1}
          />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const SelectBase = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
`;
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  bottom: 0;
  height: var(--size);
  margin: auto;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 0;
  width: var(--size);
`;

const Presentational = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-size: ${16 / 16}rem;
  padding: 12px 52px 12px 16px;

  ${SelectBase}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${SelectBase}:hover + & {
    color: black;
  }
`;

export default Select;
