import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Highlights = () => {
  const [trending, setTrending] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/search/trending").then(
      (res) => {
        setTrending(res.data.coins);
      }
    );

    Axios.get("https://api.coinstats.app/public/v1/news/handpicked").then(
      (res) => {
        setNews(res.data.news);
      }
    );
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 2200,
    adaptiveHeight: false,
  };

  return (
    <Wrapper>
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

      <NewsWrapper>
        <NewsDetails>
          <HeadingNav>
            <IconHeadingWrapper>
              <NavIcon>
                <span>⭐️ </span>
              </NavIcon>
              <NavHeading>
                <span>News of crypto world</span>
              </NavHeading>
            </IconHeadingWrapper>
            <More>
              <span>More</span>
            </More>
          </HeadingNav>
          <NewsList>
            <Slider {...settings}>
              {news &&
                news.map((news, index) => {
                  return (
                    <NewsInfo href={news.link}>
                      <NewsImgAndTitleAndDescWrapper>
                        <NewsImage>
                          <img src={news.imgURL} alt={news.source} />
                        </NewsImage>
                        <NewsTitleAndDesc>
                          <NewsLogoAndCompanyWrapper>
                            <NewsLogo>
                              <img src={news.icon} alt="#" />
                            </NewsLogo>
                            <NewsCompany>
                              <span>{news.source}</span>
                            </NewsCompany>
                          </NewsLogoAndCompanyWrapper>
                          <NewsTitle>
                            <span>{news.title}</span>
                          </NewsTitle>
                        </NewsTitleAndDesc>
                      </NewsImgAndTitleAndDescWrapper>
                    </NewsInfo>
                  );
                })}
            </Slider>
          </NewsList>
        </NewsDetails>
      </NewsWrapper>
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

const NewsWrapper = styled.div`
  border-radius: 10px;
  width: 48.5%;
  height: 200px;
  background-color: #323546;
`;

const NewsDetails = styled.div`
  padding: 16px;
`;

const NewsList = styled.div`
  cursor: pointer;
  slick-track {
    width: 100%;
    height: 200px;
  }
  .slick-dots li.slick-active button:before {
    color: #5778f7 !important;
  }
`;

const NewsInfo = styled.div`
  display: flex;
`;

const NewsImgAndTitleAndDescWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewsImage = styled.div`
  display: flex;
  img {
    border-radius: 5px;
    height: 120px;
    width: 200px;
  }
`;

const NewsTitleAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  margin-left: 10px;
  span {
    font-size: 15px;
  }
`;

const NewsLogoAndCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NewsLogo = styled.div`
  img {
    height: 20px;
    width: 28px;
  }
`;

const NewsCompany = styled.div`
  display: flex;
  align-items: center;
  span {
    padding-left: 5px;
    color: #a1a7bb;
    font-size: 13px;
  }
`;

const NewsTitle = styled.div`
  font-weight: 490;
`;

// const [latest, setLatest] = useState([]);

// Axios.get(
//   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/latest",
//   {
//     headers: {
//       "X-CMC_PRO_API_KEY": "00480671-0bfa-4f1b-985b-cdaf4d30ac31",
//     },
//   }
// ).then((res) => {
//   setLatest(res.data);
// });

// <RecentlyAddedWrapper>
//         <RecentlyAddedDetails>
//           <HeadingNav>
//             <IconHeadingWrapper>
//               <NavIcon>
//                 <img
//                   src="https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=93ab83a"
//                   alt="fireIcon"
//                 />
//               </NavIcon>
//               <span>Recently Added</span>
//             </IconHeadingWrapper>
//             <More>
//               <span>More</span>
//             </More>
//           </HeadingNav>
//           <LatestList>
//             {latest &&
//               latest.splice(0, 3).map((coin, index) => {
//                 return (
//                   <CoinDetails key={coin.item.coin_id}>
//                     <LeftWrapper>
//                       <span>{index + 1}</span>
//                       <span>{coin.item.name}</span>
//                     </LeftWrapper>
//                   </CoinDetails>
//                 );
//               })}
//           </LatestList>
//         </RecentlyAddedDetails>
//       </RecentlyAddedWrapper>

// const RecentlyAddedWrapper = styled.div`
//   border-radius: 5px;
//   width: 448px;
//   height: 200px;
//   background-color: #323546;
// `;

// const RecentlyAddedDetails = styled.div`
//   padding: 16px;
// `;

// const LatestList = styled.div``;
