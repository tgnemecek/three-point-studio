import styled from "styled-components";
import YouTube from "react-youtube";
import Section from "../../components/Section";
import Icon from "../../components/Icon";
import Hero from "../../sections/Hero";
import useContent from "../../utils/useContent";
import { Markdown, Title, Text } from "../../components/Typography";
import Button from "../../components/Button";

const VIDEO_DATA = {
  id: "s-YpILLFCac",
  title: "Crystal Fortress - Reveal Trailer",
};

type PresskitProps = {
  gameId: "crystalFortress";
};

const Presskit = ({ gameId }: PresskitProps) => {
  const content = useContent();

  return (
    <div>
      <Hero
        backgroundImage={content[gameId].images.background}
        image={content[gameId].images.logoHorizontal}
        alt={`Logo: ${content[gameId].specs.title}`}
      />
      <Section>
        <StyledWrapper>
          <StyledAside>
            <StyledVerticalLogo
              src={content[gameId].images.logoVertical}
              alt={`Logo: ${content[gameId].specs.title}`}
            />
            <StyledAsideTitle>
              <Title level={3}>{content[gameId].specs.title}</Title>
              <Text>
                {content.general.available}: {content[gameId].specs.releaseDate}
              </Text>
            </StyledAsideTitle>
            <Button
              Icon={<Icon icon="download" color="white" size={20} />}
              href={content[gameId].specs.assetKit}
            >
              {content.general.downloadImageAssets}
            </Button>
            <Button
              Icon={<Icon icon="steam" color="white" size={25} />}
              href={content[gameId].specs.steamLink}
            >
              {content.general.goToStorePage}
            </Button>
          </StyledAside>
          <StyledCard>
            <Markdown>{content[gameId].pressRelease}</Markdown>
            <StyledYoutube videoId={VIDEO_DATA.id} title={VIDEO_DATA.title} />
            <Markdown>{content.studio.pressRelease}</Markdown>
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
  margin-bottom: 32px;

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

const StyledVerticalLogo = styled.img`
  max-width: 100%;
  border-radius: 32px;
  ${BOX_SHADOW}

  ${MEDIA_QUERY} {
    display: none;
  }
`;

const StyledAsideTitle = styled.div`
  > h3 {
    margin: 20px 0;

    ${MEDIA_QUERY} {
      display: none;
    }
  }
`;

const StyledYoutube = styled(YouTube)`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;

export default Presskit;
