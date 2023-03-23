import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
      <SearchInputs>
        <SearchLogo>
          <SearchIcon/>
        </SearchLogo>
        <input type="text" placeholder="Search" />
      </SearchInputs>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  min-width: 90%;
  input {
    display: flex;
    align-items: center;
    width: 220px;
    height: 35px;
    border: none;
    font-size: 13px;
    color: white;
    background-color: #222531;
    outline: none;
    border-radius:  0 7px 7px 0;
    caret-color: #757373;
  }
`;

const SearchInputs = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const SearchLogo = styled.div`
  .MuiSvgIcon-root {
    color: #757373;
    background-color: #222531;
    height: 37px;
    border-left: 10px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
`;
