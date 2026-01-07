import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;

  main {
    flex: 1;
  }
`;

export default Layout;
