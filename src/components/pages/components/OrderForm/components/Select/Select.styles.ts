import styled from "styled-components";

export interface Option {
  label: string;
  value: string;
}

export const SHiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  height: 0px;
  width: 0px;
`;

export const SLabel = styled.label<{
  colored: boolean;
  focused: boolean;
}>`
  width: 345px;
  height: 68px;
  overflow: visible;
  padding: 0;
  border-radius: 8px;
  border: solid 1px #eeeeee;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.05px;
  color: ${({ colored }) => (colored ? "black" : "#a0a1a4")};
  border-color: ${({ focused }) => (focused ? "blue" : "")};
  width: 100%;
  height: 60px;
  display: flex;
  padding: 19px 20px;
  position: relative;
  top: 8px;
  cursor: pointer;
`;

export const SArrow = styled.img<{
  visible: boolean;
}>`
  transform: ${({ visible }) => (visible ? "rotate(180deg)" : "rotate(0)")};
  width: 8px;
  height: 8px;
  margin: auto 0 auto auto;
`;

export const SDropDown = styled.div<{
  visible: boolean;
}>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  width: 345px;
  padding: 12px 0;
  position: absolute;
  flex-direction: column;
  overflow: visible;
  z-index: 200;
  background: #fff;
  border-radius: 8px;
  line-height: 2.29;
  box-shadow: 0 15px 66px #0000000a;
  border: solid 1px #eeeeee;
  color: #1b2235;
  top: 74px;
`;

export const SOption = styled.option`
  cursor: pointer;
  padding: 0 20px;
  font-family: inherit;
  font-size: 14px;
  line-height: 2.29;
  font-weight: 500;
  &:hover {
    background-color: #a0a1a4;
  }
`;

export const SLegend = styled.legend<{
  show: boolean;
  focused: boolean;
}>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  z-index: 10;
  font-size: 12px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.04px;
  color: ${({ focused }) => (focused ? "blue" : "#a0a1a4")};
  background-color: white;
  margin-left: 22px;
  transform: translateY(-2px);
  height: 15px;
`;
