import React from 'react'
import styled from 'styled-components';

const FilteredCoins = (props) => {
  return (
    {props.filteredData?.length !== 0 && (
        <DataAfterSearch>
          <Results >
            {props.filteredData?.slice(0, 15).map((coin) => {
              return (
                <CryptoCard>
                  <CryptoIcon>
                    <CoinImage src={coin.icon} alt={coin.name} />
                  </CryptoIcon>
                  <CryptoDetails>
                    <CoinName className="cc">{coin.name}</CoinName>
                    <CoinPrice>{coin.price}</CoinPrice>
                  </CryptoDetails>
                </CryptoCard>
              );
            })}
          </Results>
        </DataAfterSearch>
      )}
  )
}

export default FilteredCoins

const DataAfterSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;