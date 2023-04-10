import styled from "styled-components";

export const SFooter = styled.footer`
  width: 100%;
  font-size: 14px;
  background-color: #fcfcfc;
  max-width: 1280px;
`;

export const SLogoContainer = styled.div`
  display: block;
  @media (max-width: 767px) {
    order: 1;
  }
`;

export const SContactsContainer = styled.div`
  display: block;
  @media (max-width: 767px) {
    order: 2;
    margin: 42px auto 40px;
  }
`;

export const SImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SFooterSection = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.71;
  justify-content: space-between;
  padding: 20px 60px;
  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    padding: 20px 15px 40px;
  }
`;

export const SLink = styled.a`
  display: block;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: #454c5d;
  }
`;

export const SEmail = styled.a`
  display: block;
  text-decoration: underline;
  color: #454c5d;
  &:hover {
    color: blue;
  }
  &:visited {
    color: #454c5d;
  }
`;

export const SInfoParagraph = styled.p`
  display: block;
  margin: 5px 0 0;
  padding: 0px;
`;

export const SContactsParagraph = styled.p`
  display: block;
  margin: 0 0 5px;
  padding: 0px;
`;

export const SInfoWrapper = styled.div`
  display: block;
  line-height: 1.71;
  @media (max-width: 767px) {
    order: 3;
  }
`;
