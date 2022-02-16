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
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Info = styled.p`
  font-size: 14px;
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
  font-size: 14px;
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
`;
