import React from "react";
import styled from "styled-components";
import News from "./News";
import TrendingCoins from "./TrendingCoins";

const Highlights = () => {
  return (
    <Wrapper>
      <TrendingCoins />
      <News />
    </Wrapper>
  );
};

export default Highlights;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 89%;
  margin: 0 5.5% 16px;
  span {
    color: white;

    padding-bottom: 5px;
  }
`;
