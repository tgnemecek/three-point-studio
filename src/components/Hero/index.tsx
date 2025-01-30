import React from "react";
import styled from "styled-components";

type HeroProps = {
  backgroundImage?: string;
  className?: string;
  image?: string;
  alt: string;
};

const Hero: React.FC<HeroProps> = ({
  image,
  backgroundImage,
  alt,
  className,
}) => {
  return (
    <StyledHeroWrapper $backgroundImage={backgroundImage} className={className}>
      {image && <img src={image} alt={alt} />}
    </StyledHeroWrapper>
  );
};

const StyledHeroWrapper = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  box-shadow: inset 0px -27px 24px 0px rgba(0, 0, 0, 0.75);
  ${({ $backgroundImage }) =>
    $backgroundImage && `background-image: url("${$backgroundImage}");`}
  background-size: cover;
  background-position: center;
  height: 250px;
  & > img {
    width: 100%;
    max-width: 500px;
    max-height: 400px;
    margin: auto;
    display: flex;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #00022c;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export default Hero;
