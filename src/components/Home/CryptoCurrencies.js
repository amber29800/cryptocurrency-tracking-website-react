import React from "react";
import styled from "styled-components";
import CoinList from "./CoinList";
import CoinListHeading from "./CoinListHeading";

const CryptoCurrencies = () => {
  return (
    <Wrapper>
      <Heading>
        <HeadingName>Cryptocurrencies</HeadingName>
      </Heading>
    </Wrapper>
  );
};

export default CryptoCurrencies;

const Wrapper = styled.div`
  width: 89%;
  margin: 0 5.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  color: white;
  width: 100%;
  height: 64px;
  background-color: rgb(53, 100, 242, 0.1);
`;

const HeadingName = styled.div`
  font-weight: 550;
  height: 64px;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #6188ff;
`;
