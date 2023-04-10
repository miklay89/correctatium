import { SLegend } from "../Select/Select.styles";
import { STextInput } from "../OrderItems";
import { useState } from "react";

interface Props {
  label: string;
  name: string;
}

export const CustomInput = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div style={{ position: "relative" }}>
      <SLegend show={inputValue.length ? true : false} focused={isFocused}>
        {props.label}
      </SLegend>
      <STextInput
        focused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={props.label}
        name={props.name}
        onChange={(e) => setInputValue(e.target.value)}
      ></STextInput>
    </div>
  );
};
