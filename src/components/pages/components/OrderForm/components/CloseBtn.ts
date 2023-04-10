import styled from "styled-components";

export const SCloseBtn = styled.div`
  display: block;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  display: block;
  margin-left: auto;
  cursor: pointer;

  &:before {
    content: "";
    background: #1b2235;
    width: 32px;
    height: 4px;
    transform: rotate(-45deg);
    position: absolute;
    inset: 0;
    margin: auto;
  }
  &:after {
    content: "";
    background: #1b2235;
    width: 32px;
    height: 4px;
    transform: rotate(45deg);
    position: absolute;
    inset: 0;
    margin: auto;
  }
  &:hover {
    background-color: #c0c0c0;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const SMediaCloseBtn = styled.div`
  @media (max-width: 767px) {
    display: block;
    width: 36px;
    height: 36px;
    position: absolute;
    top: 34;
    right: 0;
    background: transparent;
    border: none;
    display: block;
    margin-left: auto;
    cursor: pointer;

    &:before {
      content: "";
      background: #1b2235;
      width: 32px;
      height: 4px;
      transform: rotate(-45deg);
      position: absolute;
      inset: 0;
      margin: auto;
    }
    &:after {
      content: "";
      background: #1b2235;
      width: 32px;
      height: 4px;
      transform: rotate(45deg);
      position: absolute;
      inset: 0;
      margin: auto;
    }
    &:hover {
      background-color: #c0c0c0;
    }
    transform: scale(0.5);
    top: 34px;
  }
`;
