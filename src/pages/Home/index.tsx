import styled from "styled-components";
import Steam from "../../sections/Steam";
import useContent from "../../utils/useContent";
import Hero from "../../sections/Hero";

const Home = () => {
  const content = useContent();

  return (
    <div className="Home__main">
      <StyledHero image={content.studio.logoHorizontal} alt="Logo" />
      <Steam gameId="crystalFortress" />
    </div>
  );
};

const StyledHero = styled(Hero)`
  height: 200px;
`;

export default Home;
