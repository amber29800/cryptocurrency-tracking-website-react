import React from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import LanguageTwoToneIcon from "@material-ui/icons/LanguageTwoTone";

const CoinList = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=200").then(
      (res) => {
        setCoin(res.data.coins);
      }
    );
  }, []);

  return (
    <Wrapper>
      {coin && coin.map((coin) => {
        return (
          <CoinDeatailsWrapper>
            <Blank></Blank>
            <Rank>
              <p>{coin.rank}</p>
            </Rank>
            <IconNameSymbolWrapper>
              <Icon>
                <img src={coin.icon} alt={coin.name} />
              </Icon>
              <Name>
                <p>{coin.name}</p>
              </Name>
              <Symbol>
                <p>{coin.symbol}</p>
              </Symbol>
            </IconNameSymbolWrapper>
            <Price>
              <p>${parseFloat(coin.price).toFixed(2)}</p>
            </Price>
            <Volume>
              <p>{parseFloat(coin.volume).toFixed(2)}</p>
            </Volume>
            <OneHChange>
              <p style={{color: coin.priceChange1h > 0 ? "#16c784" : "#ea3943"}}>{Math.abs(coin.priceChange1h)}%</p>
            </OneHChange>
            <Twenty4Change>
              <p style={{color: coin.priceChange1d > 0 ? "#16c784" : "#ea3943"}}>{Math.abs(coin.priceChange1d)}%</p>
            </Twenty4Change>
            <SevenDaysChannge>
              <p style={{color: coin.priceChange1w > 0 ? "#16c784" : "#ea3943"}}>{Math.abs(coin.priceChange1w)}%</p>
            </SevenDaysChannge>
            <MarketCap>
              <p>{parseFloat(coin.marketCap).toFixed(2)}</p>
            </MarketCap>
            <CirculatingSupply>
              <p>{parseFloat(coin.availableSupply).toFixed(2)}</p>
            </CirculatingSupply>
            <WebsiteURL>
              <a href={coin.websiteUrl} target="_blank" rel="noreferrer">
                <LanguageTwoToneIcon />
              </a>
            </WebsiteURL>
            <TwitterURL>
              <a href={coin.twitterUrl} target="_blank" rel="noreferrer">
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="twittericon"/>
              </a>
            </TwitterURL>
          </CoinDeatailsWrapper>
        );
      })}
    </Wrapper>
  );
};

export default CoinList;

const Wrapper = styled.div``;
const CoinDeatailsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  width: 89%;
  height: 70.5px;
  margin: 0 5.5%;
  border-bottom: 0.1px solid #2b2b2b;
  a,
  p {
    cursor: pointer;
    margin: 0;
  }
`;

const Blank = styled.div`
  width: 36px;
  height: 70.5px;
`;
const Rank = styled.div`
  width: 32.8px;
  height: 70.5px;
  display: flex;
  align-items: center;
`;
const IconNameSymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  width:192.7px;
`;
const Icon = styled.div`
display: flex;
align-items: center;
  img {
    height: 24px;
    width: 24px;
  }
`;
const Name = styled.div`
  p {
    padding-left: 5px;
  }
`;
const Symbol = styled.div`
  p {
    padding-left: 10px;
  }
`;
const Price = styled.div`
  display: flex;
  justify-content: end;
  width: 121.66px;
  
`;
const Volume = styled.div`
  display: flex;
  justify-content: end;
  width: 165.55px;
`;
const OneHChange = styled.div`
  display: flex;
  justify-content: end;
  width: 75.94px;
`;
const Twenty4Change = styled.div`
  display: flex;
  justify-content: end;
  width: 75.94px;
`;
const SevenDaysChannge = styled.div`
  display: flex;
  justify-content: end;
  width: 82.5px;
`;
const MarketCap = styled.div`
  display: flex;
  justify-content: end;
  width: 160.4px;
`;
const CirculatingSupply = styled.div`
  display: flex;
  justify-content: end;
  width: 170.4px;
`;
const WebsiteURL = styled.div`
  a  {
    .MuiSvgIcon-root {
    color: white;
    text-decoration: none;
  }
  }
`;
const TwitterURL = styled.div`
  a img {
    height: 24px;
    width: 24px;
  }
`;
