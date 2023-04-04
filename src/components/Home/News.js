import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Axios  from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
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
  );
};

export default News;

const NewsWrapper = styled.div`
  border-radius: 10px;
  width: 48.5%;
  height: 200px;
  background-color: #323546;
`;

const NewsDetails = styled.div`
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