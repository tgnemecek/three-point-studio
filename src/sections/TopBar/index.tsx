import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Text } from "../../components/Typography";
import LanguageContext from "../../utils/LanguageContext";
import useContent from "../../utils/useContent";
import Theme from "../../components/Theme";

const TopBar = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);
  const content = useContent();

  const [isOnTop, setIsOnTop] = useState(true);

  const onScroll = () => {
    setIsOnTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.onscroll = onScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);

  const { backgroundOpacity, logoOpacity } = useMemo(() => {
    if (pathname !== "/") {
      return {
        backgroundOpacity: 0.7,
        logoOpacity: 1,
      };
    }
    return {
      backgroundOpacity: isOnTop ? 0 : 0.8,
      logoOpacity: isOnTop ? 0 : 1,
    };
  }, [isOnTop, pathname]);

  return (
    <StyledAffix $backgroundOpacity={backgroundOpacity}>
      <Link to="/" style={{ lineHeight: 0 }}>
        <StyledStudioLogo
          src={content.studio.logoWhiteHorizontal}
          $logoOpacity={logoOpacity}
        />
      </Link>
      <button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
        <Text color="white" bold>
          {language.toUpperCase()}
        </Text>
      </button>
    </StyledAffix>
  );
};

const StyledAffix = styled.div<{
  $backgroundOpacity: number;
}>`
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: "";
    background-color: ${Theme.dark.main};
    position: absolute;
    opacity: ${({ $backgroundOpacity }) => $backgroundOpacity};
    transition: opacity 0.5s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const StyledStudioLogo = styled.img<{
  $logoOpacity: number;
}>`
  opacity: ${({ $logoOpacity }) => $logoOpacity};
  transition: opacity 0.5s;
`;

export default TopBar;
