import styled from "styled-components";
import Section from "../../components/Section";
import Hero from "../../sections/Hero";

const Presskit = () => {
  return (
    <div>
      <Hero />
      <Section>
        <StyledHeading>
          Defend Your Kingdom in Crystal Fortress — A Turn-Based Tower Defense
          Game Coming February 2025
        </StyledHeading>
        <StyledParagraph>
          January 10, 2025 — Indie game developers at Three-Point Studio are
          thrilled to announce the release of Crystal Fortress, an exciting
          blend of Turn-Based Tactics and Tower Defense gameplay, launching on
          Steam this <strong>February 2025</strong>. Players will immerse
          themselves in a gripping battle to defend the Crystal Fortress and its
          people from unrelenting invaders.
        </StyledParagraph>
        <StyledAside>
          "This fortress is our home. We will not let the enemy shatter it." —
          Captain Phoebe of the Crystal Guard
        </StyledAside>
        <StyledParagraph>
          Take command of Captain Phoebe, a fierce warrior, skilled archer,
          resourceful engineer, and fearless leader of the Crystal Guard. Armed
          with strategy and determination, you'll summon powerful soldiers and
          snipers, deploy turrets on the battlefield, and lead Phoebe into the
          fray to ensure the fortress' survival.
        </StyledParagraph>
        <StyledParagraph>
          Crystal Fortress offers an innovative mix of tactical thinking and
          fast-paced action. Players will need to strategize and adapt to outwit
          cunning enemies while balancing troop deployment and combat. With its
          charming medieval fantasy pixel-art setting, Crystal Fortress delivers
          an experience that is rewarding for strategy enthusiasts and
          approachable for players not familiar with the genre.
        </StyledParagraph>
        <StyledParagraph>
          Crystal Fortress will be available on Steam starting{" "}
          <strong>February 2025</strong>. Add the game to your wishlist now to
          receive updates and notifications about the launch.
        </StyledParagraph>
        <StyledAside>
          Prepare your defenses, summon your forces, and stand your ground in
          the ultimate battle for the Crystal Fortress!
        </StyledAside>
        <StyledParagraph>
          Three-Point Studio is an indie game development team passionate about
          creating engaging and fresh gaming experiences. Crystal Fortress marks
          our debut title, and we are excited to share it with players
          worldwide.
        </StyledParagraph>
        <StyledParagraph>[Video here]</StyledParagraph>
        <StyledParagraph>[Assets here]</StyledParagraph>
      </Section>
    </div>
  );
};

const StyledHeading = styled.h2`
  margin-bottom: 15px;
`;

const StyledAside = styled.aside`
  margin-bottom: 15px;
  font-size: 20px;
  font-style: italic;
`;

const StyledParagraph = styled.p`
  margin-bottom: 25px;
`;

export default Presskit;
