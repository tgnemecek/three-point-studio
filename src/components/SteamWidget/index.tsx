import React from "react";
import styled from "styled-components";
import Section from "../../components/Section";
import useContent from "../../utils/useContent";
import { Markdown, Paragraph, Title } from "../../components/Typography";
import { FONT_WEIGHT } from "../../components/Typography/constants";

type SteamProps = {
  gameId: "crystalFortress";
};

const SteamWidget: React.FC<SteamProps> = ({ gameId }) => {
  const content = useContent();

  return (
    <Section>
      <StyledContainer>
        <div>
          <Title level={3} color="white" style={{ marginBottom: 10 }}>
            {content[gameId].specs.title}
          </Title>
        </div>
        <StyledDescription>
          <StyledCapsule
            href={content[gameId].specs.widgetLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={content.crystalFortress.images.logoHorizontal} />
          </StyledCapsule>
          <Markdown
            components={{
              p: (props) => <Paragraph {...props} color="white" />,
            }}
          >
            {content[gameId].steamSummary}
          </Markdown>
        </StyledDescription>
        <StyledCTA>
          <div>
            <StyledDate>
              {content.general.available}: {content[gameId].specs.releaseDate}
            </StyledDate>
            <StyledButton>
              <a
                href={content[gameId].specs.widgetLink}
                target="__blank"
                rel="noreferrer"
              >
                {content.general.wishlistOnSteam}
              </a>
            </StyledButton>
          </div>
        </StyledCTA>
      </StyledContainer>
    </Section>
  );
};

const MEDIA_QUERY = `@media screen and (max-width: 600px)`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border-top: 1px solid #424c5c;
  border-left: 1px solid #424c5c;
  background: linear-gradient(130deg, #3b4351, #282e39);
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.4);
  padding: 10px 15px;
  position: relative;
  margin: 70px auto 20px auto;

  &:after {
    position: absolute;
    display: block;
    right: 10px;
    top: 10px;
    content: " ";
    width: 40px;
    height: 40px;
    background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8"%3F><svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.1 91.21"><defs><style> .cls-1 { fill: %23ffffff66; } </style></defs><g id="Layer_1-2" data-name="Layer 1"><g><path class="cls-1" d="M95.1,13.23c0,2.73-2.05,4.44-4.4,4.44s-4.41-1.71-4.41-4.44,2.06-4.43,4.41-4.43,4.4,1.7,4.4,4.43Zm-8.14,0c0,2.33,1.7,3.8,3.74,3.8s3.73-1.47,3.73-3.8-1.69-3.79-3.73-3.79-3.74,1.45-3.74,3.79Zm3.79-2.26c1.17,0,1.51,.61,1.51,1.24s-.37,1-.79,1.21l1.02,1.93h-.78l-.88-1.72h-.94v1.72h-.64v-4.37h1.49Zm-.85,2.05h.81c.53,0,.85-.34,.85-.75s-.22-.69-.85-.69h-.81v1.45Z"/><g><path class="cls-1" d="M45.45,0C21.49,0,1.87,18.47,0,41.95l24.44,10.11c2.07-1.42,4.57-2.24,7.27-2.24,.24,0,.48,0,.72,.02l10.87-15.76c0-.07,0-.15,0-.22,0-9.48,7.72-17.2,17.2-17.2s17.2,7.72,17.2,17.2-7.72,17.2-17.2,17.2c-.13,0-.26,0-.39,0l-15.5,11.06c0,.2,.01,.41,.01,.61,0,7.12-5.79,12.91-12.91,12.91-6.25,0-11.47-4.46-12.66-10.37L1.57,58.03c5.41,19.14,23,33.18,43.88,33.18,25.19,0,45.6-20.42,45.6-45.6S70.63,0,45.45,0Z"/><path class="cls-1" d="M28.58,69.2l-5.6-2.31c.99,2.07,2.71,3.8,4.99,4.75,4.93,2.05,10.61-.29,12.67-5.22,.99-2.39,1-5.02,.01-7.41-.98-2.39-2.84-4.26-5.23-5.25-2.37-.99-4.91-.95-7.14-.11l5.79,2.39c3.64,1.52,5.36,5.69,3.84,9.33-1.51,3.64-5.69,5.36-9.33,3.84Z"/><path class="cls-1" d="M71.96,33.85c0-6.32-5.14-11.46-11.46-11.46s-11.46,5.14-11.46,11.46,5.14,11.46,11.46,11.46,11.46-5.14,11.46-11.46Zm-20.05-.02c0-4.75,3.86-8.61,8.61-8.61s8.61,3.85,8.61,8.61-3.85,8.61-8.61,8.61-8.61-3.85-8.61-8.61Z"/></g></g></g></svg>');
    background-repeat: no-repeat;
  }
`;

const StyledDescription = styled.div`
  padding-bottom: 20px;
  margin: 10px 10px 0 0;
  color: #c9c9c9;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  display: grid;
  grid-template-columns: 250px 1fr;

  ${MEDIA_QUERY} {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledCapsule = styled.a`
  display: block;
  position: relative;
  & img {
    width: 100%;
    object-fit: contain;
    position: relative;
    top: -10px;
    left: -10px;
    ${MEDIA_QUERY} {
      & {
        top: 0;
        left: 0;
      }
    }
  }
`;

const StyledCTA = styled.div`
  position: absolute;
  bottom: -20px;
  right: 10px;

  > div {
    padding: 5px 5px 5px 10px;
    color: #b8dc89;
    border: 1px solid #232a0e;
    background: -webkit-linear-gradient(30deg, #395021 5%, #283e18 95%);
    background: linear-gradient(60deg, #395021 5%, #283e18 95%);
    height: auto;
    font-size: 20px;

    ${MEDIA_QUERY} {
      & {
        padding: 0px;
      }
    }
  }
`;

const StyledDate = styled.div`
  float: left;
  font-size: 1em;
  margin: 0 10px 0 2px;
  vertical-align: middle;
  line-height: 1.6;
  font-weight: ${FONT_WEIGHT.subtitle};

  ${MEDIA_QUERY} {
    & {
      display: none;
    }
  }
`;

const StyledButton = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  display: inline-block;
  vertical-align: middle;

  > a {
    display: inline-block;
    height: 34px;
    font-size: 0.8em;
    color: #d2efa9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    text-align: center;
    padding: 0px 11px;
    line-height: 34px;
    border-radius: 2px;
    text-transform: unset;
    background: #75b022;
    background: -webkit-linear-gradient(top, #6fa720 5%, #588a1b 95%);
    background: linear-gradient(to bottom, #6fa720 5%, #588a1b 95%);
    background: linear-gradient(to right, #6fa720 5%, #588a1b 95%);
    cursor: pointer;
    font-weight: ${FONT_WEIGHT.subtitle};

    &:hover {
      color: white;
      background: linear-gradient(to right, #8ed629 5%, #6aa621 95%);
    }
  }
`;

export default SteamWidget;
