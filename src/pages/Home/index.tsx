import styled from "styled-components";
import useContent from "../../utils/useContent";
import Hero from "../../components/Hero";
import SteamWidget from "../../components/SteamWidget";
import Section from "../../components/Section";
import Button from "../../components/Button";

const Home = () => {
  const content = useContent();

  return (
    <div>
      <StyledHero
        backgroundImage={content.studio.studioHero}
        image={content.studio.logoWhiteHorizontal}
        alt="Logo"
      />
      <SteamWidget gameId="crystalFortress" />
      <StyledSection>
        <Button href="/crystal_fortress/presskit">
          {content.general.readPressRelease}
        </Button>
      </StyledSection>
      <StyledLogo3dWrapper>
        <img src={content.studio.logo3d} alt="Logo 3d" />
      </StyledLogo3dWrapper>
    </div>
  );
};

const StyledHero = styled(Hero)`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 400px;
  }
`;

const StyledSection = styled(Section)`
  text-align: right;
`;

const StyledLogo3dWrapper = styled.div`
  display: flex;
  justify-content: center;
  > img {
    width: 100px;
    object-fit: contain;
  }
`;

export default Home;
