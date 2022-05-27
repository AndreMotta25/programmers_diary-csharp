import styled from "styled-components";

export const ShadowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const Container = styled.div`
  width: 60%;
  height: 68%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Form = styled.form`
  height: 93%;
`;
export const Container1 = styled.div`
  width: 50%;
`;
export const Container2 = styled.div`
  width: 50%;
`;
export const ContainerMestre = styled.div`
  height: 100%;
  display: flex;
  gap: 40px;
  width: 100%;
`;
export const Button = styled.button`
  background-color: #282828;
  padding: 5px 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #8333c8;
    opacity: 0.8;
    transition: all 0.5s ease;
    & svg {
      color: black !important;
      transition: all 0.5s ease;
    }
  }
`;
