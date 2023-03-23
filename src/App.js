import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./components/Home/Home.js";

const App = () => {
  const [listOfCrypto, setListOfCrypto] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=200").then(
      (res) => {
        setListOfCrypto(res.data.coins);
      }
    );
  }, []);

  return (
    <Wrapper>
      <Navbar coins={listOfCrypto}/>
      <Home/>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
