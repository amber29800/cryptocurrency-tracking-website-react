import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Highlights from "./Highlights";
import CryptoCurrencies from "./CryptoCurrencies";
import CoinListHeading from "./CoinListHeading";
import CoinList from "./CoinList";

const Home = () => {
  const [totalMarketCap, setTotalMarketCap] = useState();

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/global").then((res) => {
      setTotalMarketCap(
        parseFloat(res.data.data.market_cap_change_percentage_24h_usd).toFixed(
          2
        )
      );
    });
  }, []);

  return (
    <Wrapper>
      <Heading>
        <Headline>Today's Cryptocurrency Prices by Coinerr</Headline>
        <GlobalMarketChange>
          The global market cap of the world has changed by {" "}
          <span style={{ color: totalMarketCap > 0 ? "#16c784" : "#ea3943" }}>
             {Math.abs(totalMarketCap)}% 
          </span>
          {" "}over the last day.
        </GlobalMarketChange>
      </Heading>
      <Highlights />
      <CryptoCurrencies/>
      <CoinListHeadingWrapper>
        <CoinListHeading/>
      </CoinListHeadingWrapper>
      <CoinList/>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  background: linear-gradient(#212430 , #0a0a0a);
`;

const Heading = styled.div`
  color: white;
  font-size: 25px;
  width: 89%;
  margin: 24px 5.5%;
  display: flex;
  flex-direction: column;
`;

const Headline = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin: 8px 0 4px;
`;
const GlobalMarketChange = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #a1a7bb;
`;
const CoinListHeadingWrapper = styled.div`
  position: static;
`
