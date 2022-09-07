import React from "react";
import * as S from "./styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Name>
        <Skeleton
          width={"100%"}
          enableAnimation={true}
          highlightColor="#282828"
          style={{ marginBottom: "6px" }}
        />
      </S.Name>
      <S.Info>
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
      </S.Info>
      <S.WrapperInfo>
        <S.Language>
          <Skeleton
            style={{ marginBottom: "6px" }}
            width={40}
            enableAnimation={true}
            highlightColor="#282828"
          />
        </S.Language>
        <S.Menu>
          <Skeleton
            style={{ marginBottom: "6px" }}
            width={40}
            enableAnimation={true}
            highlightColor="#282828"
          />
        </S.Menu>
      </S.WrapperInfo>
    </S.Wrapper>
  );
};

export default CardSkeleton;
