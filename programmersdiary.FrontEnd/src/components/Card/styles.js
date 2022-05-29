import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Roboto Slab", serif;
  width: 100%;
  padding: 9px;
  border: 2px solid #282828;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 30%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 28.5%;
  cursor: pointer;
  transition: box-shadow 300ms, transform 300ms;
  &&:active {
    box-shadow: 0px 0px 0px;
    transform: translateX(4px), translateY(4px);
  }

  @media screen and (min-width: 1441px) and (max-width: 1900px),
    screen and (min-width: 1901px) {
    min-height: 20%;
    margin-bottom: 40px;
  }
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Info = styled.p`
  font-size: clamp(0.8rem, 1vw, (2rem));
  color: white;
  letter-spacing: 1px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
export const Language = styled.div`
  font-size: clamp(1rem, 1vw, (2rem));
  text-transform: uppercase;
  background-color: #282828;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  &:hover {
    color: #46fc42;
  }
`;
export const Name = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 5px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  @media screen and (min-width: 1900px) {
    font-size: clamp(1rem, 1vw + 1rem, (2rem+0.5rem));
  }
`;
