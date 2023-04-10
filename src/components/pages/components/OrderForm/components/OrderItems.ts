import styled from "styled-components";

export const SInputWrapper = styled.div`
  margin-bottom: 30px;
  height: 68px;
  min-width: 345px;
`;

export const SWrapper = styled.div`
  width: 100%;
  max-width: 660px;
  position: relative;
`;

export const STextArea = styled.textarea<{
  focused: boolean;
}>`
  resize: none;
  width: 100%;
  max-width: 660px;
  min-height: 200px;
  min-width: 100%;
  border-radius: 16px;
  border: ${({ focused }) =>
    focused ? "1px solid blue" : "1px solid #eeeeee"};
  outline: none;
  padding: 20px 30px;
  margin-bottom: 25px;
`;

export const SPlaceholderAndUpload = styled.div<{
  show: boolean;
}>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.05px;
  color: #a0a1a4;
`;

export const SUploadInput = styled.input`
  display: none;
  overflow: visible;
`;

export const SUploadLabel = styled.label`
  color: blue;
  cursor: pointer;
`;

export const STextInputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  width: 100%;
  flex-direction: row;
`;

export const STextInput = styled.input<{
  focused: boolean;
}>`
  width: 345px;
  position: relative;
  height: 60px;
  top: 8px;
  padding: 0;
  border-radius: 8px;
  border: ${({ focused }) =>
    focused ? "1px solid blue" : "1px solid #eeeeee"};
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.05px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.05px;
  color: #a0a1a4;
  margin-bottom: 30px;
  padding: 19px 20px;
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.05px;
    color: #a0a1a4;
  }
`;
