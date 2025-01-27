import styled from "styled-components";
import Steam from "../../sections/Steam";
import useContent from "../../utils/useContent";
import Hero from "../../sections/Hero";

const Home = () => {
  const content = useContent();

  return (
    <div className="Home__main">
      <StyledHero
        backgroundImage={content.studio.studioHero}
        image={content.studio.logoWhiteHorizontal}
        alt="Logo"
      />
      <Steam gameId="crystalFortress" />
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

export default Home;
