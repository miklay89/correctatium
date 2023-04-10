import styled from "styled-components";

export const SForm = styled.form`
  display: grid;
  grid-template-columns: 17fr 6fr;
  grid-gap: 10px;
  padding-top: 80px;
  margin-bottom: 120px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const SFormInputs = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
`;

export const SFormSubmit = styled.div`
  position: relative;
  display: block;
  padding-top: 108px;
  margin-right: 0;
  text-align: right;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const SFormContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 60px;
  @media (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
