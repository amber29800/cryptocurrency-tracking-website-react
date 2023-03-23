import React from "react";
import "./result.css";
import styled from "styled-components";

const Result = (props) => {
  return (
    <Wrapper>
      {props.filteredData?.length === 0 && (
        <DataBeforeSearch>
          {props.coins
            .slice(0, 25)
            .sort((a, b) => (a.price < b.price ? 1 : -1))
            .map((coin) => {
              return (
                <CryptoCard>
                  <CryptoIcon>
                    <CoinImage src={coin.icon} alt={coin.name} />
                  </CryptoIcon>
                  <CryptoDetails>
                    <CoinName>{coin.name}</CoinName>
                    <CoinPrice>
                      {parseFloat(coin.price).toFixed(2)} USD
                    </CoinPrice>
                  </CryptoDetails>
                </CryptoCard>
              );
            })}
        </DataBeforeSearch>
      )}
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div``;

const DataBeforeSearch = styled.div``;

const CryptoCard = styled.div`
  background-color: black;
  border-radius: 7px;
  color: white;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 15px;
  padding: 10px 0px;
`;

const CryptoIcon = styled.div``;

const CoinImage = styled.image``;

const CryptoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const CoinName = styled.div``;

const CoinPrice = styled.div``;
