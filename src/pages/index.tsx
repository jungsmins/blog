import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { GlobalStyle } from '../styles/GlobalStyle';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
