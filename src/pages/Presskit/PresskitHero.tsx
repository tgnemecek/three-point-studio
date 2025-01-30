import React from "react";
import styled from "styled-components";

type PresskitHeroProps = {
  backgroundImage: string;
  image: string;
  alt: string;
};

const PresskitHero: React.FC<PresskitHeroProps> = ({
  image,
  backgroundImage,
  alt,
}) => {
  return (
    <StyledHeroWrapper $backgroundImage={backgroundImage}>
      <img src={image} alt={alt} />
    </StyledHeroWrapper>
  );
};

const StyledHeroWrapper = styled.div<{ $backgroundImage: string }>`
  position: relative;
  box-shadow: inset 0px -27px 24px 0px rgba(0, 0, 0, 0.75);
  background-image: url("${({ $backgroundImage }) => $backgroundImage}");
  background-size: cover;
  padding-top: 50px;
  & img {
    width: 100%;
    max-width: 500px;
    max-height: 400px;
    margin: auto;
    display: flex;
    object-fit: cover;
  }
`;

export default PresskitHero;
