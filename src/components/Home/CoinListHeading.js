import React from "react";
import styled from "styled-components";

const CoinListHeading = () => {
  return (
    <Wrapper>
      <Heading>
        <Blank></Blank>
        <Number>
          <p>#</p>
        </Number>
        <Name>
          <p>Name</p>
        </Name>
        <Price>
          <p>Price</p>
        </Price>
        <Volume>
          <p>Volume(24h)</p>
        </Volume>
        <OneH>
          <p>1h %</p>
        </OneH>
        <Twenty4H>
          <p>24h %</p>
        </Twenty4H>
        <SevenDays>
          <p>7d %</p>
        </SevenDays>
        <MarketCap>
          <p>Market Cap</p>
        </MarketCap>
        <CirculatingSupply>
          <p>Circulating Supply</p>
        </CirculatingSupply>
        <URLs>
          <p>Link</p>
          <SitesURL>
            <WebsiteURL>
              <p>Website</p>
            </WebsiteURL>
            <TwitterURL>
              <p>Twitter</p>
            </TwitterURL>
          </SitesURL>
        </URLs>
      </Heading>
    </Wrapper>
  );
};

export default CoinListHeading;

const Wrapper = styled.div`
  width: 89%;
  margin: 0 5.5% 16px;
`;

const Heading = styled.div`
  position: sticky;
  height: 47px;
  display: flex;
  top: 0;
  border-bottom: 0.1px solid #2b2b2b;
  p {
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 11px 10px;
    margin: 0;
  }
`;

const Blank = styled.div`
  display: flex;
  align-items: center;
  width: 32.8px;
  height: 47px;
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  width: 32.8px;
  height: 47px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  width: 192.7px;
  height: 47px;
`;

const Price = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 121.67px;
  height: 47px;
`;

const Volume = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 165.56px;
  height: 47px;
`;

const OneH = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 75.94px;
  height: 47px;
`;

const Twenty4H = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 75.94px;
  height: 47px;
`;

const SevenDays = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 82.5px;
  height: 47px;
`;

const MarketCap = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 160.4px;
  height: 47px;
`;

const CirculatingSupply = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 170.41px;
  height: 47px;
`;

const URLs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 184px;
  height: 47px;
  p {
    padding: 0;
  }
`;

const SitesURL = styled.div`
  display: flex;
`;

const WebsiteURL = styled.div``;

const TwitterURL = styled.div``;
