import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./sections/TopBar";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Presskit from "./pages/Presskit";
import { LanguageContextProvider } from "./utils/LanguageContext";
import Theme from "./components/Theme";

const App = () => {
  return (
    <StyledWrapper>
      <HashRouter>
        <LanguageContextProvider>
          <StyledInnerContainer>
            <TopBar />
            <Routes>
              <Route
                path="/crystal_fortress/presskit"
                Component={() => <Presskit gameId="crystalFortress" />}
              />
              <Route path="*" Component={Home} />
            </Routes>
          </StyledInnerContainer>
          <Footer />
        </LanguageContextProvider>
      </HashRouter>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  background-color: ${Theme.white.main};
  min-height: 100vh;
`;

const StyledInnerContainer = styled.div`
  min-height: 100vh;
  margin-bottom: 10px;
`;

export default App;
