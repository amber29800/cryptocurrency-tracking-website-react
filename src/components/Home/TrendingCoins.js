import { useState, useEffect } from 'react'
import Axios from 'axios';
import styled from "styled-components";

const TrendingCoins = () => {

    const [trending, setTrending] = useState([]);

    useEffect(() => {
        Axios.get("https://api.coingecko.com/api/v3/search/trending").then(
          (res) => {
            setTrending(res.data.coins);
          }
        );
      }, []);

    return (
        <TrendingWrapper>
        <TrendingDetails>
          <HeadingNav>
            <IconHeadingWrapper>
              <NavIcon>
                <img
                  src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=93ab83a"
                  alt="fireIcon"
                />
              </NavIcon>
              <NavHeading>
                <span>Trending</span>
              </NavHeading>
            </IconHeadingWrapper>
            <More>
              <span>More</span>
            </More>
          </HeadingNav>
          <TrendingList>
            {trending &&
              trending.splice(0, 3).map((coin, index) => {
                return (
                  <CoinDetails key={coin.item.coin_id}>
                    <LeftWrapper>
                      <Rank>
                        <span> {index + 1} </span>
                      </Rank>
                      <CoinIcon>
                        <img src={coin.item.thumb} alt="icon" />
                      </CoinIcon>
                      <CoinName>
                        <span>{coin.item.name}</span>
                      </CoinName>
                      <CoinSymbol>
                        <span>{coin.item.symbol}</span>
                      </CoinSymbol>
                    </LeftWrapper>
                    <RightWrapper>
                      <PriceChange>
                        <span>
                          ${parseFloat(coin.item.price_btc).toFixed(7)}
                        </span>
                      </PriceChange>
                    </RightWrapper>
                  </CoinDetails>
                );
              })}
          </TrendingList>
        </TrendingDetails>
      </TrendingWrapper>
    );
}

export default TrendingCoins;

const TrendingWrapper = styled.div`
  border-radius: 10px;
  width: 48.5%;
  height: 200px;
  background-color: #323546;
`;

const TrendingDetails = styled.div`
  padding: 16px;
`;

const HeadingNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconHeadingWrapper = styled.div`
  display: flex;
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  img {
    margin-right: 7px;
    height: 20px;
    width: 20px;
  }
  span {
    margin-right: 7px;
  }
`;

const NavHeading = styled.div`
  span {
    font-weight: 700;
  }
`;

const More = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 12px;
    font-weight: 600;
    color: #6188ff;
  }
  span:hover {
    color: #8da9fc;
  }
`;

const TrendingList = styled.div``;

const CoinDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #404457;
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;

const Rank = styled.div`
  margin-left: 8px;
  span {
    color: #858ca2;
  }
`;

const CoinIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 16px;
  img {
    border-radius: 50%;
  }
`;

const CoinName = styled.div`
  margin-left: 8px;
  font-weight: 600;
`;

const CoinSymbol = styled.div`
  margin-left: 8px;
  font-weight: 600;
  span {
    color: #858ca2;
  }
`;

const RightWrapper = styled.div`
  /* display: flex; */
  align-items: center;
`;

const PriceChange = styled.div``;