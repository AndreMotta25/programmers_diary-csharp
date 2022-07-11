import styled from "styled-components";

export const WrapperDefault = styled.div`
  width: 80%;
  margin: auto auto;
  max-height: 656px;
  height: 80vh;
  display: flex;
  border-radius: 10px;
  /* padding: 38px 30px; */
  background-image: linear-gradient(to right, #e981d9, #6d22c4);
  position: relative;

  @media screen and (min-width: 1500px) {
    max-width: 1500px;
  }
`;
