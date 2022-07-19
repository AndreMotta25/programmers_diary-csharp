import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  align-items: baseline;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;
export const WrapperActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  outline: none;
  border-radius: 5px;
  padding: 5px;
  border: none;
  background-color: #282828;
  cursor: pointer;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
  width: 100%;
  padding-right: 5px;
`;
export const Footer = styled.footer`
  width: 100%;
  text-align: center;
`;
export const Texto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #282828;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  padding: 5px;
`;
export const LinkGitHub = styled.a`
  color: #282828;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LinkLogin = styled.a`
  color: #fff;
  text-align: center;

  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;
