import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LanguageContext from "../../utils/LanguageContext";

const TopBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <StyledAffix>
      <Link to="/">
        <StyledStudioName>Three-Point Studio</StyledStudioName>
      </Link>
      <StyledLanguageButton
        onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      >
        {language.toUpperCase()}
      </StyledLanguageButton>
    </StyledAffix>
  );
};

const StyledAffix = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  background-color: #00000082;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledStudioName = styled.h1`
  text-align: left;
  font-size: 1.2rem;
  color: white;
  display: inline;
`;

const StyledLanguageButton = styled.button`
  background-color: initial;
  color: white;
`;

export default TopBar;
