import { useContext } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Section from "../../components/Section";
import Content from "../../components/Content";
import LanguageContext from "../../LanguageContext";
import Icon from "../../components/Icon";
import Hero from "../../sections/Hero";

const VIDEO_DATA = {
  id: "s-YpILLFCac",
  title: "Crystal Fortress - Reveal Trailer",
};

type PresskitProps = {
  gameId: "crystalFortress";
};

const Presskit = ({ gameId }: PresskitProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Hero
        backgroundImage={Content.getImage((c) => c[gameId].background)}
        image={(c) => c[gameId].logoHorizontal}
        alt={`${Content.getSpecs((c) => c[gameId].title)} logo`}
      />
      <Section>
        <StyledWrapper>
          <StyledAside>
            <StyledVerticalLogo
              image={(c) => c[gameId].logoVertical}
              alt={`${Content.getSpecs((c) => c[gameId].title)} vertical logo`}
            />
            <StyledAsideTitle>
              {Content.getSpecs((c) => c.crystalFortress.title)}
            </StyledAsideTitle>
            <StyledAsideButton
              $iconSize={20}
              href={Content.getSpecs((c) => c.crystalFortress.assetKit)}
              target="__blank"
              rel="noreferrer"
            >
              {Content.getGeneral((c) => c.downloadImageAssets[language])}
              <Icon icon="download" color="white" />
            </StyledAsideButton>
            <StyledAsideButton
              $iconSize={25}
              href={Content.getSpecs((c) => c.crystalFortress.steamLink)}
              target="__blank"
              rel="noreferrer"
            >
              {Content.getGeneral((c) => c.goToStorePage[language])}
              <Icon icon="steam" color="white" />
            </StyledAsideButton>
          </StyledAside>
          <StyledCard>
            <Content text={(c) => c[gameId].pressRelease} />
            <StyledYoutube videoId={VIDEO_DATA.id} title={VIDEO_DATA.title} />
            <Content text={(c) => c.studio.pressRelease} />
          </StyledCard>
        </StyledWrapper>
      </Section>
    </div>
  );
};

const MEDIA_QUERY = `@media screen and (max-width: 900px)`;
const BOX_SHADOW = `box-shadow: 4px 6px 24px 0px rgba(0, 0, 0, 0.2);`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 25px;
  padding-top: 32px;

  ${MEDIA_QUERY} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StyledAside = styled.aside``;

const StyledCard = styled.div`
  padding: 32px;
  background-color: #fdfcf9;
  border-radius: 32px;
  ${BOX_SHADOW}
`;

const StyledVerticalLogo = styled(Content)`
  max-width: 100%;
  border-radius: 32px;
  ${BOX_SHADOW}

  ${MEDIA_QUERY} {
    display: none;
  }
`;

const StyledAsideTitle = styled.h2`
  margin: 20px 0;

  ${MEDIA_QUERY} {
    display: none;
  }
`;

const StyledAsideButton = styled.a<{ $iconSize: number }>`
  display: inline-block;
  margin-top: 20px;
  margin-right: 20px;
  color: white;
  background-color: #383838;
  border-radius: 16px;
  padding: 10px;
  &:hover {
    color: white;
    background-color: #232323;
  }
  & svg {
    height: ${({ $iconSize }) => $iconSize}px;
    width: ${({ $iconSize }) => $iconSize}px;
    margin-left: 10px;
    display: inline-block;
    vertical-align: bottom;
  }
`;

const StyledYoutube = styled(YouTube)`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;

export default Presskit;
