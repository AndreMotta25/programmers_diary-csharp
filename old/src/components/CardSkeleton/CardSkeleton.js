import React from "react";
import { WrapperInfo, Wrapper, Language, Info, Name, Menu } from "./styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <Wrapper>
      <Name>
        <Skeleton
          width={"100%"}
          enableAnimation={true}
          highlightColor="#282828"
          style={{ marginBottom: "6px" }}
        />
      </Name>
      <Info>
        <Skeleton
          style={{ marginBottom: "6px" }}
          enableAnimation={true}
          highlightColor="#282828"
        />
        <Skeleton
          style={{ marginBottom: "6px" }}
          width={"80%"}
          enableAnimation={true}
          highlightColor="#282828"
        />
      </Info>
      <WrapperInfo>
        <Language>
          <Skeleton
            style={{ marginBottom: "6px" }}
            width={40}
            enableAnimation={true}
            highlightColor="#282828"
          />
        </Language>
        <Menu>
          <Skeleton
            style={{ marginBottom: "6px" }}
            width={40}
            enableAnimation={true}
            highlightColor="#282828"
          />
        </Menu>
      </WrapperInfo>
    </Wrapper>
  );
};

export default CardSkeleton;
