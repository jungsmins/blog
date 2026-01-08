import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
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

  main {
    flex: 1;
  }
`;

export default Layout;
