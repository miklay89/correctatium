import { useEffect, useState, useRef, KeyboardEventHandler } from "react";
import Arrow from "../../../../../../assets/images/arrow_down.svg";
import {
  Option,
  SLabel,
  SLegend,
  SOption,
  SArrow,
  SDropDown,
  SHiddenInput,
} from "./Select.styles";

interface Props {
  label: string;
  options: Option[];
  value: Option | null;
  onChange: (opt: Option) => void;
}

export const CustomSelect = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFocusedLegend, setIsFocusedLegend] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const selectOption = (opt: Option) => {
    props.onChange(opt);
  };

  useEffect(() => {
    // outside click
    const outsideClickHandler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
        setIsFocusedLegend(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    // unfocus by tab
    const tabKeyHandler = (e: KeyboardEvent) => {
      if (e.key === "Tab" && isFocused) {
        setIsFocused(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", tabKeyHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
      document.removeEventListener("keydown", tabKeyHandler);
    };
  });

  return (
    <div style={{ position: "relative" }} ref={menuRef}>
      <SLegend show={props.value ? true : false} focused={isFocusedLegend}>
        {props.label}
      </SLegend>
      <SHiddenInput
        type={"checkbox"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <SLabel
        focused={isFocused && props.options.length ? true : false}
        colored={props.value ? true : false}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setIsFocused(true);
          setIsFocusedLegend((prev) => !prev);
        }}
      >
        {props.value ? props.value.label : props.label}
        <SArrow
          src={Arrow}
          visible={isOpen && props.options.length ? true : false}
        />
      </SLabel>
      <SDropDown visible={isOpen && props.options.length ? true : false}>
        {props.options.map((option, index) => (
          <SOption
            key={index}
            value={option.value}
            onClick={() => {
              selectOption(option);
              setIsOpen(false);
              setIsFocusedLegend(false);
            }}
          >
            {option.label}
          </SOption>
        ))}
      </SDropDown>
    </div>
  );
};
