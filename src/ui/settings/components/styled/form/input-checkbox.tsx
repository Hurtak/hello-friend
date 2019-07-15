import React, { useRef } from "react";
import styled from "styled-components/macro";
import { uuid } from "../../../../../utils/random";
import * as s from "../../../../../styles";
import { Icon } from "../../../../../icons";
import {
  checkBoxRadioLabelStyles,
  CheckBoxRadioWrapper,
  CheckBoxRadioInput,
  CheckBoxRadioText,
  formBoxStyles,
} from "./form-shared";

export const InputCheckBox: React.FC<{
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  children: string;
}> = ({ checked, disabled = false, onChange, children }) => {
  const inputIdRef = useRef(uuid());

  return (
    <CheckBoxRadioWrapper>
      <CheckBoxRadioInput
        type="checkbox"
        id={inputIdRef.current}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Label htmlFor={inputIdRef.current}>
        <CheckboxComponent>
          <CheckboxCheckWrapper>
            <Icon type="CHECK" width={1.25} height={1.25} color={s.colors.white} />
          </CheckboxCheckWrapper>
        </CheckboxComponent>
        <CheckBoxRadioText>{children}</CheckBoxRadioText>
      </Label>
    </CheckBoxRadioWrapper>
  );
};

const Label = styled.label(() => ({
  ...checkBoxRadioLabelStyles,

  cursor: "pointer",

  // TODO: use onFocusVisible React event once it becomes standardized
  [`${CheckBoxRadioInput}${s.focusVisible} + &`]: {
    backgroundColor: s.colors.whiteTransparent20,
  },
}));

const CheckboxComponent = styled.div({
  ...formBoxStyles(CheckBoxRadioInput, Label),

  borderRadius: s.grid(0.25),
});

const CheckboxCheckWrapper = styled.div({
  visibility: "hidden",
  [`${CheckBoxRadioInput}:checked + ${Label} &`]: {
    visibility: "visible",
  },
});
