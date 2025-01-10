import styled from "styled-components";
import Section from "../../components/Section";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Section>
      <Link to="/">
        <StyledStudioName>Three-Point Studio</StyledStudioName>
      </Link>
    </Section>
  );
};

const StyledStudioName = styled.h1`
  text-align: right;
  font-size: 1.2rem;
  color: #3a3a3a;
`;

export default TopBar;
