import styled from '@emotion/styled';
import { Link } from 'gatsby';
import githubLogo from '../images/github_logo.png';

const Header = () => {
  return (
    <Container>
      <Title to="/">개발자 박정민</Title>
      <NavMenu>
        <li>
          <GitHubLink
            href="https://github.com/jungsmins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon src={githubLogo} alt="GitHub Logo" />
          </GitHubLink>
        </li>
      </NavMenu>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const GitHubIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default Header;
