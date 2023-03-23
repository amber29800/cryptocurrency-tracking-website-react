import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import TollSharpIcon from "@material-ui/icons/TollSharp";
const Navbar = (props) => {
  return (
    <Wrapper>
      <GreetingAndInUpBar>
        <GreetingAndInUpWrapper>
          <Greeting>
            <span>Welcome to the world's best crypto tracker website</span>
          </Greeting>
          <Authentication>
            <DayNight>
              <WbSunnyOutlinedIcon />
            </DayNight>
            <SignInBtn>
              <span>Sign In</span>
            </SignInBtn>
            <SignUpBtn>
              <span>Sign Up</span>
            </SignUpBtn>
          </Authentication>
        </GreetingAndInUpWrapper>
      </GreetingAndInUpBar>
      <LogoAndSearchWrapper>
        <LogoAndOptionsWrapper>
          <LogoWrapper>
            <a href="/">
              <CrypCoinerLogo>
                <TollSharpIcon />
              </CrypCoinerLogo>
              <CrypCoinerName>CrypCoinerr</CrypCoinerName>
            </a>
          </LogoWrapper>
          <Options>
            <CryptocurrenciesBtn>Cryptocurrencies</CryptocurrenciesBtn>
            <ExchangesBtn>Exchanges</ExchangesBtn>
          </Options>
        </LogoAndOptionsWrapper>
        <SearchWrapper>
          <SearchBar/>
        </SearchWrapper>
      </LogoAndSearchWrapper>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 125px;
  margin: 0 20px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  background-color: #17171a;
`;

const GreetingAndInUpBar = styled.div`
  border-bottom: 0.1px solid #2b2b2b;
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GreetingAndInUpWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 89%;
  margin: 0 5.5% 0 5.5%;
  justify-content: space-between;
`;

const Greeting = styled.div`
  font-weight: 350;
  color: rgb(97, 136, 255);
`;

const LogoAndSearchWrapper = styled.div`
  height: 55%;
  width: 89%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoAndOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const LogoWrapper = styled.div`
  color: yellow;
  width: 180px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }
`;

const CrypCoinerLogo = styled.div`
  display: flex;
  margin-right: 5px;
`;

const CrypCoinerName = styled.div`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
`;

const Options = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-bottom: 4px;
  cursor: pointer;
`;

const CryptocurrenciesBtn = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 350;
  font-size: 14px;

  &:hover {
    background-color: #202020;
  }
`;
const ExchangesBtn = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 350;
  font-size: 14px;
  &:hover {
    background-color: #202020;
  }
`;

const SearchWrapper = styled.div``;

const Authentication = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 14px;
  }
`;

const DayNight = styled.div`
  padding-top: 4px;
  margin: 10px;

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

const SignInBtn = styled.button`
  border: 1px solid #3861fb;
  color: #6188ff;
  background-color: transparent;
  border-radius: 8px;
  margin: 1px 4px;
  height: 35px;
  cursor: pointer;
  &:hover {
    background-color: #1e1e21;
  }
`;

const SignUpBtn = styled.button`
  background-color: #3861fb;
  color: white;
  border-radius: 8px;
  margin: 1px 4px;
  height: 35px;
  cursor: pointer;
  &:hover {
    background-color: #4c71fc;
  }
`;
