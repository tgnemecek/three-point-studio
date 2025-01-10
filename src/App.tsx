import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./sections/TopBar";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Presskit from "./pages/Presskit";
import styled from "styled-components";

const App = () => {
  return (
    <StyledWrapper>
      <BrowserRouter>
        <StyledInnerContainer>
          <TopBar />
          <Routes>
            <Route path="/crystal_fortress/presskit" Component={Presskit} />
            <Route path="*" Component={Home} />
          </Routes>
        </StyledInnerContainer>
        <Footer />
      </BrowserRouter>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  background-color: #e9ce9b;
  min-height: 100vh;
`;

const StyledInnerContainer = styled.div`
  min-height: 100vh;
  margin-bottom: 10px;
`;

export default App;
